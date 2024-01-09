import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const config = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                console.log('Signin');
                return { id: '1', name: 'test', email: 'test@test.com' };
            },
        }),
    ],

    pages: {
        signIn: '/auth/signin',
        newUser: '/auth/signup',
    },
} satisfies NextAuthOptions;
