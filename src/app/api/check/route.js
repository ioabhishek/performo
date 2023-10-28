import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;
    let result = "not a subscriber";
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser && existingUser.subscriber === true) {
      result = "subscriber";
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { user: null, message: "Error" },
      { status: 500 }
    );
  }
}
