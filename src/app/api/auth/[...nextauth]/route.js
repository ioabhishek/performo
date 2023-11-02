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
                const {name, email, image} = user;
                try {
                    const res = await fetch('https://performo.in/api/signup.php', {
                        method: "POST",
                        headers: {
                            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        },
                        body: new URLSearchParams({ name:name, email:email, image:image })
                    })

                    const json = await res.json()
                    console.log(json)


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
