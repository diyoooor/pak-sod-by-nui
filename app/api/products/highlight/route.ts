import { cors } from "@/app/lib/cors";
import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("paksod");

  const products = await db.collection("products").find().limit(6).toArray();
  const response = NextResponse.json(products);

  return cors(response);
}
