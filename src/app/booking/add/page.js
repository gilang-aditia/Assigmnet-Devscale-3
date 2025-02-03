"use client";

import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useActionState } from "react";
import { createDataAction } from "../_hooks/useCreate";

export default function Page() {
  const [state, formAction, pending] = useActionState(createDataAction, null);

  console.log(state);
  return (
    <div className="container mx-auto p-4 mt-10 space-y-6">
      <section>
        <h3 className="text-2xl font-bold">Tambah Data</h3>
        <p>Masukan data baru</p>
      </section>
      <Form className="w-full space-y-8" action={formAction}>
        <Input
          isRequired
          errorMessage="Please enter a valid nama"
          label="nama"
          labelPlacement="outside"
          name="nama"
          placeholder="Masukan nama"
          type="nama"
        />

        <Select
          isRequired
          errorMessage="Please select a gender"
          label="Gender"
          labelPlacement="outside"
          name="gender"
          placeholder="Pilih gender">
          <SelectItem key="laki-laki" value="laki-laki">
            Laki-laki
          </SelectItem>
          <SelectItem key="perempuan" value="perempuan">
            Perempuan
          </SelectItem>
        </Select>

        <Input
          isRequired
          errorMessage="Please enter a valid no_hp"
          label="No .Hp"
          labelPlacement="outside"
          name="no_hp"
          placeholder="Masukan No .Hp"
          type="no_hp"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid no_identitas"
          label="No Identitas"
          labelPlacement="outside"
          name="no_identitas"
          placeholder="Masukan No Identitas"
          type="no_identitas"
        />

        <Textarea
          isRequired
          errorMessage="Please enter a valid alamat"
          label="alamat"
          labelPlacement="outside"
          name="alamat"
          placeholder="Masukan alamat"
          type="alamat"
        />

        {state?.message ? <div>{state.message}</div> : null}

        <Button type="submit" disabled={pending} variant="bordered">
          Submit
        </Button>
      </Form>
    </div>
  );
}
