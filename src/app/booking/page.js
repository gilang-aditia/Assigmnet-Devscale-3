import { Button } from "@heroui/react";
import { ListBook } from "./_components/list-book";
import { UserIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <section>
        <h3 className="text-2xl font-bold">Halaman Booking</h3>
        <p>Masukan daftar list Booking Hotel</p>
      </section>
      <section>
        <Link href="/booking/add">
          <Button color="primary" startContent={<UserIcon />}>
            Tambah Data
          </Button>
        </Link>
      </section>

      <ListBook />
    </main>
  );
}
