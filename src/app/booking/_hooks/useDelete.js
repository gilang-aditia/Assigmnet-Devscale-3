"use server";

import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";

export async function useDelete({ id }) {
  await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]), // Gunakan id langsung
  });

  console.log(id);

  revalidatePath("/booking");
}
