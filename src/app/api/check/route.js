import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;
    var result = "not a suscriber";
    const existingUser = await db.user.findUnique({
        where: { email: email },
    });

    // const newUser = await db.user.create({
    //   data: {
    //     email,
    //     name ,
    //     image,
    //   },
    // });
    const status = existingUser.subscriber;
    console.log(status);
    if (status === true) {
        result = "suscriber";
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
