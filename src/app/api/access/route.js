import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
   try {
      const body = await req.json();
      const { email } = body;

      const existingRequest = await db.AccessRequest.findUnique({
         where: {email: email}
      });

      if(existingRequest) {
         return NextResponse.json(
            { AccessRequest: null, message: "Email already requested" },
            { status: 400 }
         );
      }

      const newRequest = await db.AccessRequest.create({
         data: {
            email
         }
      });

      return NextResponse.json(
         { AccessRequest: newRequest, message: "Requested successfully" },
         { status: 200 }
      );
   } catch(error) {
      console.error(error);
      return NextResponse.json(
         { user: null, message: "Error creating request" },
         { status: 500 }
      );
   }
}