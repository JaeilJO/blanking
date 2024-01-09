import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
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
                const id = '1';
                const email: string = credentials?.email;
                const password = credentials?.password;

                if (email === 'whwodlf97@gmail.com' && password === '1234') {
                    return { id, email, name: 'jaeil' };
                } else {
                    return null;
                }
            },
        }),
    ],
};

export default NextAuth(authOptions);
