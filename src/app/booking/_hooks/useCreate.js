"use server";

import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createDataAction(_, FormData) {
  const nama = FormData.get("nama");
  const gender = FormData.get("gender");
  const no_hp = FormData.get("no_hp");
  const no_identitas = FormData.get("no_identitas");
  const alamat = FormData.get("alamat");

  if (!nama || !gender || !no_hp || !no_identitas || !alamat) {
    return { message: "Data tidak boleh Kosong" };
  }

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        nama,
        gender,
        no_hp,
        no_identitas,
        alamat,
      },
    ]),
  });

  // refacth data
  revalidatePath("/booking");
  redirect("/booking");
}
