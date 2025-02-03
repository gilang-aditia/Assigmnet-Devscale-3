import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";

export default function Page() {
  return (
    <div className="container mx-auto p-4 mt-10 space-y-6">
      <section>
        <h3 className="text-2xl font-bold">Update Data</h3>
        <p>Perbaiki bila ada kesalahan</p>
      </section>
      <Form className="w-full space-y-8">
        <Input
          isRequired
          errorMessage="Please enter a valid nama"
          label="nama"
          labelPlacement="outside"
          name="nama"
          placeholder="Masukan nama"
          type="nama"
        />

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

        <Button type="submit" variant="bordered">
          Update
        </Button>
      </Form>
    </div>
  );
}
