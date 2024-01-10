import type { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const config = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { key: 'email', type: 'email' },
                password: { key: 'password', type: 'password' },
            },
            async authorize(credentials, req) {
                const email = credentials?.email as string;
                const password = credentials?.password as string;
                return { id: '1', name: 'test', email: 'test@test.com' };
            },
        }),
    ],

    pages: {
        signIn: '/auth/signin',
        newUser: '/auth/signup',
    },
} satisfies NextAuthOptions;
