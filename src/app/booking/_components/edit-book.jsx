import { API_URL } from "@/constants/api-url";
import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import React from "react";

export const BookingUpdate = ({
  id,
  nama,
  gender,
  no_hp,
  no_identitas,
  alamat,
}) => {
  async function UpdateDataBooking(formData) {
    "use server";

    const _id = formData.get("id");
    const nama = formData.get("nama");
    const gender = formData.get("gender");
    const no_hp = formData.get("no_hp");
    const no_identitas = formData.get("no_identitas");
    const alamat = formData.get("alamat");

    await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, nama, gender, no_hp, no_identitas, alamat }),
    });
    console.log(id);

    revalidatePath(`/booking/${id}`);
  }

  return (
    <div className="container mx-auto p-4 mt-10 space-y-6">
      <section>
        <h3 className="text-2xl font-bold">Tambah Data</h3>
        <p>Masukan data baru</p>
      </section>
      <Form className="w-full space-y-8" action={UpdateDataBooking}>
        <Input
          isRequired
          errorMessage="Please enter a valid id"
          label="id"
          labelPlacement="outside"
          name="id"
          placeholder="Masukan id"
          type="id"
          defaultValue={id}
        />

        <Input
          isRequired
          errorMessage="Please enter a valid nama"
          label="nama"
          labelPlacement="outside"
          name="nama"
          placeholder="Masukan nama"
          type="nama"
          defaultValue={nama}
        />

        <div className="w-full space-y-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            defaultValue={gender}
            required
            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Pilih gender</option>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>

        <Input
          isRequired
          errorMessage="Please enter a valid no_hp"
          label="No .Hp"
          labelPlacement="outside"
          name="no_hp"
          placeholder="Masukan No .Hp"
          type="no_hp"
          defaultValue={no_hp}
        />

        <Input
          isRequired
          errorMessage="Please enter a valid no_identitas"
          label="No Identitas"
          labelPlacement="outside"
          name="no_identitas"
          placeholder="Masukan No Identitas"
          type="no_identitas"
          defaultValue={no_identitas}
        />

        <Textarea
          isRequired
          errorMessage="Please enter a valid alamat"
          label="alamat"
          labelPlacement="outside"
          name="alamat"
          placeholder="Masukan alamat"
          type="alamat"
          defaultValue={alamat}
        />

        <Button type="submit" variant="bordered">
          Submit
        </Button>
      </Form>
    </div>
  );
};
