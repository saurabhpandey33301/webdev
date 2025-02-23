import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


export const Next_Auth = {
   
        providers: [
            CredentialsProvider({
                name: "Email",
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "email" },
                    password: { label: "password", type: "password", placeholder: "pass" },
                },
                async authorize(credentials: any) {
                    console.log(credentials)
                    return {
                        id: "user1",
                        name: "saurabh",
                        email: "s@gmail.com",
                        pass: "123456"
                    };
                },
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || "" ,
                clientSecret: process.env.GOOGLE_SECRET_KEY || ""
              })
        ],

        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            jwt: async ({ token }: any) => {
                token.userId = token.sub;
                return token;
            },
            session: ({ session, token, user }: any) => {
                if (session && session.user) {
                    session.user.id = token.userId
                }
                return session
            }
        }
    
}
