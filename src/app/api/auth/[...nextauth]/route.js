import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account}) {
            if(account.provider === 'google') {
                const {email, name, image, subscriber} = user;
                try {
                    const res = await fetch('http://localhost:3000/api/user', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, name, image, subscriber})
                    })
                    if(res.ok) {
                        return user;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    }
});

export { handler as GET, handler as POST };
