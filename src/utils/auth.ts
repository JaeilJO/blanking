import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const config = {
    providers: [
        CredentialsProvider({
            name: 'credentials',

            credentials: {},
            async authorize(credentials, req) {
                console.log('here is Next Auth authorize');
                return { id: '1', name: 'test', email: 'test@test.com' };
            },
        }),
    ],
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     console.log('hello Signin', user);
        //     return true;
        // },
        // async session({ session, token, user }) {
        //     console.log('session', session);
        //     return session;
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     console.log('toekn', token);
        //     return token;
        // },
    },
    pages: {
        signIn: '/auth/signin',
        newUser: '/auth/signup',
    },
} satisfies NextAuthOptions;
