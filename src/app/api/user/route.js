import { NextResponse } from "next/server";
import {db} from "@/lib/db"
export async function POST(req) {
    try{
    const body = await req.json()
    const {email,name,image}=body;
    // const {name}=body;
    // const {image}=body;
    const existingemail=await db.user.findUnique({where:{email:email}});
    if(existingemail){
        return NextResponse.json({user:null,message:"Email already exists"},{status:400})
    }
    const newUser=await db.user.create({data:{email}});
    return NextResponse.json({user:newUser,message:"User created successfully"},{status:200});
    
    }catch(e){
        console.log(e)
    }
  }
  