import { API_URL } from "@/constants/api-url";
import { Button } from "@heroui/react";
import Link from "next/link";

export const ListBook = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data);

  return (
    <div className="mt-10 max-w-full mx-auto">
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 border-b border-gray-300 p-4">
        <div className="font-bold">Nama</div>
        <div className="font-bold">Gender</div>
        <div className="font-bold">No. Hp</div>
        <div className="font-bold">No. Identitas</div>
        <div className="font-bold">Alamat</div>
        <div className="font-bold">Aksi</div>
      </div>

      {/* Table Body */}
      <div>
        {data.data.map((item, index) => (
          <div
            className="grid grid-cols-6 gap-4 border-b border-gray-200 p-4"
            key={index}
          >
            <div>{item.nama}</div>
            <div>{item.gender}</div>
            <div>{item.no_hp}</div>
            <div>{item.no_identitas}</div>
            <div>{item.alamat}</div>
            <div className="flex space-x-2" key={item._id}>
              <Link href={`/booking/${item._id}`}>
                <Button size="sm" color="primary" className="font-bold">
                  View
                </Button>
              </Link>
              <Button size="sm" color="warning" className="font-bold">
                Edit
              </Button>
              <Button size="sm" color="danger" className="font-bold">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
