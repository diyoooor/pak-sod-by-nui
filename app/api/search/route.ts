import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const client = await clientPromise;
  const db = client.db();
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is missing" },
      { status: 400 }
    );
  }

  try {
    const results = await db
      .collection("products")
      .find({ name: { $regex: query, $options: "i" } })
      .limit(10)
      .toArray();

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
