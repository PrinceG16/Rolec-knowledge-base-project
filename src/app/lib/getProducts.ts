// lib/actions/getProducts.ts
import { db } from "~/server/db";
import { products } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function getAllProducts() {
  const rows = await db.select().from(products);
  return rows.map((row) => ({
    ...row,
    category: JSON.parse(row.category ?? "[]"),
    downloads: JSON.parse(row.downloads ?? "[]"),
    specifications: JSON.parse(row.specifications ?? "[]"),
  }));
}

export async function getProductsByCategory(category: string) {
  const rows = await db.select().from(products);
  return rows
    .map((row) => ({
      ...row,
      category: JSON.parse(row.category ?? "[]"),
      downloads: JSON.parse(row.downloads ?? "[]"),
      specifications: JSON.parse(row.specifications ?? "[]"),
    }))
    .filter((product) => product.category.includes(category));
}
