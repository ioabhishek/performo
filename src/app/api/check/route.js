import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function POST(req) {
  try {
    const body = await req.json();
    const { email} = body;
    var result="not a suscriber";
    const existingUser = await db.user.findUnique({ where: { email: email } });

  

    // const newUser = await db.user.create({
    //   data: {
    //     email,
    //     name ,
    //     image,
    //   },
    // });
    const image=existingUser.image;
    if(image === 'https://lh3.googleusercontent.com/a/ACg8ocKIUTzhA6_FPbHB7hR0lIPTGCa7lQFlwgQ00JI7nWIdSQ=s96-c'){
result="suscriber";
    }
    return NextResponse.json({ result, message: "User created successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ user: null, message: "Error creating user" }, { status: 500 });
  }
}
