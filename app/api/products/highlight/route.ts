import { connectToDatabase } from "@/app/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const db = await connectToDatabase();

  switch (req.method) {
    case "GET":
      const products = await db
        .collection("products")
        .find()
        .limit(6)
        .toArray();

      return NextResponse.json(products);

    default:
      return NextResponse.json({
        error: `Method ${req.method} not allowed`,
      });
  }
}
