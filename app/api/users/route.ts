import { cors } from "@/app/lib/cors";
import clientPromise from "@/app/lib/mongodb";
import { LiffProfile } from "@/app/store/useLiffStore";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("paksod");

  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.search);

  const userId = searchParams.get("userId");

  try {
    const user = await db.collection("users").findOne({ userId });

    if (!user) return cors(NextResponse.json({ message: "User not found" }));
    return cors(NextResponse.json(user));
  } catch (error) {
    console.error("Error creating user:", error);
    return cors(
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    );
  }
}

export async function POST(req: Request) {
  const client = await clientPromise;
  try {
    const db = client.db("paksod");
    const body = await req.json();

    if (!body.userId || !body.displayName || !body.pictureUrl) {
      return cors(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const phoneRegex = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    if (body.phoneNumber && !phoneRegex.test(body.phoneNumber)) {
      return cors(
        NextResponse.json(
          { error: "Invalid phone number format" },
          { status: 400 }
        )
      );
    }

    const existingUser = await db
      .collection("users")
      .findOne({ userId: body.userId });
    if (existingUser) {
      return cors(
        NextResponse.json({ message: "User already exists" }, { status: 409 })
      );
    }

    await db.collection("users").insertOne(body);
    return cors(
      NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      )
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return cors(
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    );
  }
}

export async function PATCH(req: Request) {
  const client = await clientPromise;
  const db = client.db("paksod");
  try {
    const body: Partial<LiffProfile> = await req.json();

    if (!body.userId) {
      return cors(
        NextResponse.json({ error: "User ID is required" }, { status: 400 })
      );
    }

    const result = await db
      .collection("users")
      .updateOne({ userId: body.userId }, { $set: body });

    if (result.matchedCount === 0) {
      return cors(
        NextResponse.json({ error: "User not found" }, { status: 404 })
      );
    }

    return cors(
      NextResponse.json(
        { message: "User profile updated successfully" },
        { status: 200 }
      )
    );
  } catch (error) {
    console.error("Error partially updating user profile:", error);
    return cors(
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    );
  }
}
