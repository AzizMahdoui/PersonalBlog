import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const result = await sql`
                    SELECT * FROM users WHERE username = ${credentials.username}
                `;

                const user = result.rows[0];

                if (!user) {
                    return null;
                }

                const isPasswordValid = await compare(credentials.password, user.password);

                if (!isPasswordValid) {
                    return null;
                }

                return { id: user.id, name: user.username, email: user.email };
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };