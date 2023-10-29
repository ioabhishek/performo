import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
export const authOptions = {
    adapter:PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ]
}   