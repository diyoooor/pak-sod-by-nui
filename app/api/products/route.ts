import { connectToDatabase } from "@/app/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();

  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.search);

  const category = searchParams.get("category");

  switch (req.method) {
    case "GET":
      if (category === "ทั้งหมด") {
        const products = await db.collection("products").find().toArray();
        return NextResponse.json(products);
      } else {
        const products = await db
          .collection("products")
          .find({ category })
          .toArray();
        return NextResponse.json(products);
      }

    case "POST":
      return res.status(201).json({ message: "Add to cart" });

    case "DELETE":
      return res.status(200).json({ message: "Cart cleared" });

    default:
      return res
        .status(405)
        .json({ error: `Method ${req.method} not allowed` });
  }
}
