"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function clearCacheAction() {

  // Revalidate entire website
  revalidatePath("/", "layout");

  // Optional: if using tags
  revalidateTag("global");

  return {
    success: true,
    message: "Cache cleared successfully"
  };
}