import { connectToDatabase } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const db = await connectToDatabase();

  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.search);

  const userId = searchParams.get("userId");

  const user = await db.collection("users").findOne({ userId });

  if (!user) return NextResponse.json({ message: "User not found" });
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const db = await connectToDatabase();
  const body = await req.json();

  if (
    !body.userId ||
    !body.displayName ||
    !body.pictureUrl ||
    !body.shopName ||
    !body.phoneNumber ||
    !body.address
  ) {
    return NextResponse.json({ error: "Missing required fields" });
  }

  const regex = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
  if (!regex.test(body.phoneNumber)) {
    return NextResponse.json({ error: "Invalid phone number format" });
  }

  const existingUser = await db
    .collection("users")
    .findOne({ userId: body.userId });
  if (existingUser) {
    return;
  }

  await db.collection("users").insertOne(body);

  return NextResponse.json({ message: "User created successfully" });
}
