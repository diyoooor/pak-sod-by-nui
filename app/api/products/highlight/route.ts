import { cors } from "@/app/lib/cors";
import { connectToDatabase } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await connectToDatabase();

  const products = await db.collection("products").find().limit(6).toArray();
  const response = NextResponse.json(products);

  return cors(response);
}
