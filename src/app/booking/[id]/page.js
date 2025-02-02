export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/GTWu6On8Su4w/${id}`
  );

  const data = await res.json();

  return (
    <main className="container mt-10 mx-auto p-6 max-w-2xl bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Detail Information</h2>

      <div className="mb-4">
        <h4 className="text-xl font-bold">Name:</h4>
        <p className="text-lg">{data.nama}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold">Gender:</h4>
        <p className="text-lg">{data.gender}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold">Phone Number:</h4>
        <p className="text-lg">{data.no_hp}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold">Identity Number:</h4>
        <p className="text-lg">{data.no_identitas}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold">Address:</h4>
        <p className="text-lg">{data.alamat}</p>
      </div>
    </main>
  );
}
