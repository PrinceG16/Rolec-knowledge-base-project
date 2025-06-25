// app/api/products/route.ts
import { getAllProducts } from "~/app/lib/getProducts";
import { NextResponse } from "next/server";
import { products } from "~/server/db/schema";
import { db } from "~/server/db";

export async function GET() {
  const rows = await db.select().from(products);

  const parsedRows = rows.map((row) => ({
    ...row,
    category: JSON.parse(row.category ?? "[]"),
    downloads: JSON.parse(row.downloads ?? "[]"),
    specifications: JSON.parse(row.specifications ?? "[]"),
  }));

  return NextResponse.json(parsedRows);
}
