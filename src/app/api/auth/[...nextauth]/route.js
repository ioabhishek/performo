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
                    const url = `https://performo.in/api/signup.php?token_key=@123abcd1366&name=${name}&email=${email}&image=${image}`

                    const res = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, name, image})
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
