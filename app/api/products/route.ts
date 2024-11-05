import { cors } from "@/app/lib/cors";
import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("paksod");
  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.search);
  const category = searchParams.get("category");

  if (category === "ทั้งหมด") {
    const products = await db.collection("products").find().toArray();
    return cors(NextResponse.json(products));
  } else {
    const products = await db
      .collection("products")
      .find({ category })
      .toArray();

    return cors(NextResponse.json(products));
  }
}
