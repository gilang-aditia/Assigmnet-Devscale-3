"use client";

import { useTransition } from "react";
import { useDelete } from "../_hooks/useDelete"; // Tidak perlu `use` di namanya karena ini bukan hook
import { Button } from "@heroui/react";

export const DeleteDataAction = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this book?")) {
      startTransition(async () => {
        try {
          await useDelete({ id });

          console.log("Book deleted successfully.");
        } catch (error) {
          console.error("Error deleting book:", error);
          alert("Failed to delete book.");
        }
      });
    }
  };

  return (
    <Button
      onPress={handleDelete}
      size="sm"
      color="danger"
      className="font-bold"
      disabled={isPending}>
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
};
