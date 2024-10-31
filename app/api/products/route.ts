import { connectToDatabase } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const db = await connectToDatabase();

  const products = await db.collection("products").find({}).toArray();
  return NextResponse.json(products);
}
