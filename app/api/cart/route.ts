import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { cors } from "@/app/lib/cors";
import { CartItem } from "@/app/store/cartStore";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  try {
    const results = await db.collection("carts").find().toArray();

    return cors(NextResponse.json(results));
  } catch (error) {
    console.error("Error fetching search results:", error);
    return cors(
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    );
  }
}

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const body: CartItem = await req.json();

    if (!body.userId || !body.items || !body.cartTotal) {
      return cors(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const existingCart = await db
      .collection("carts")
      .findOne({ userId: body.userId });

    console.log(`test => `, existingCart);

    // if (existingCart) {
    //   await db
    //     .collection("carts")
    //     .updateOne(
    //       { userId: body.userId },
    //     );
    // } else {
    //   await db.collection("carts").insertOne(body);
    // }

    return cors(NextResponse.json({ message: "Product added to cart" }));
  } catch (error) {
    console.error("Error fetching search results:", error);
    return cors(
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    );
  }
}

export async function DELETE(req: Request) {
  const client = await clientPromise;
  const db = client.db();
  const { searchParams } = new URL(req.url);

  if (!searchParams.get("userId") || !searchParams.get("productId")) {
    return cors(
      NextResponse.json(
        { error: "Missing required query parameters" },
        { status: 400 }
      )
    );
  }

  await db.collection("carts").deleteOne({
    userId: searchParams.get("userId"),
    productId: searchParams.get("productId"),
  });

  return cors(NextResponse.json({ message: "Product removed from cart" }));
}
