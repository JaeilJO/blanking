import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/',
        newUser: '/signup',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},

            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                if (email === 'whwodlf97@gmail.com' && password === '1234') {
                    console.log('맞음');
                    return { email, name: 'jaeil' };
                } else {
                    return null;
                }
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
