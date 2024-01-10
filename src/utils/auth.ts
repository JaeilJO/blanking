import type { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export const config: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { key: 'email', type: 'email' },
                password: { key: 'password', type: 'password' },
            },
            async authorize(credentials): Promise<any> {
                const prisma = new PrismaClient();
                const email = credentials?.email as string;
                const password = credentials?.password as string;

                const user = await prisma.user.findFirstOrThrow({
                    where: {
                        email,
                    },
                });

                if (!user) {
                    return null;
                }

                if (user) {
                    const checking_password = await bcrypt.compare(password, user.password);

                    if (!checking_password) {
                        return null;
                    }
                }

                return user;
            },
        }),
    ],

    pages: {
        signIn: '/auth/signin',
        newUser: '/auth/signup',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account, profile }) {
            return token;
        },

        async session({ session, token, user }) {
            session.user.id = token.sub;

            return session;
        },
    },
} satisfies NextAuthOptions;
