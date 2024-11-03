import { connectToDatabase } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await connectToDatabase();

  const products = await db.collection("products").find().limit(6).toArray();

  return NextResponse.json(products);
}
