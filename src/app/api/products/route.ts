// app/api/products/route.ts
import { getAllProducts } from "~/app/lib/getProducts";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllProducts();
  return NextResponse.json(data);
}
