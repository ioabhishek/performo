import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, image, subscriber = false } = body;

    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 400 }
      );
    }

    const newUser = await db.user.create({
      data: {
        email,
        name,
        image,
        subscriber
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { user: null, message: "Error creating user" },
      { status: 500 }
    );
  }
}
