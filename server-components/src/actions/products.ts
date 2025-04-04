"use server";

import { revalidatePath } from "next/cache";
import { mockDb as db } from "../lib/db";
// import { redirect } from "next/navigation";

export async function getProducts() {
  try {
    const link = await db.connect("localhost", "root", "passw0rd");
    const data = await db.query(link, "SELECT * FROM products");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Server action failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch products",
    };
  }
}

interface ProductResult {
  success: boolean;
  message?: string;
  error?: string;
  productId?: number;
}

export async function addProduct(formData: FormData) {
  try {
    const connection = await db.connect("localhost", "root", "passw0rd");

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priceStr = formData.get("price") as string;

    if (!title || !description || !priceStr) {
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    const price = parseFloat(priceStr);
    if (isNaN(price) || price <= 0) {
      return {
        success: false,
        error: "Price must be a positive number",
      };
    }

    await db.addProduct(connection, {
      title,
      description,
      price,
    });
  } catch (error: unknown) {
    console.log("error: ", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add product",
    };
  }

  revalidatePath("/");
  //   redirect(`/`);
}
