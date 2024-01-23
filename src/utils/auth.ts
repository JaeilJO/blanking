import { type NextAuthOptions, type Session } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { JWT } from 'next-auth/jwt';

const prisma = new PrismaClient();

export const config: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),

        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { key: 'email', type: 'email' },
                password: { key: 'password', type: 'password' },
            },
            async authorize(credentials, req): Promise<any> {
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
                    const checking_password = bcrypt.compare(password, user.password as string);

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
            console.log(token, account);
            if (account?.provider === 'google') {
                const signedUser = await prisma.user.findUnique({
                    where: {
                        email: token?.email as string,
                    },
                });
            }

            return token;
        },

        async session({ session, token }: { session: Session; token: JWT }) {
            session.user.id = token.sub;

            return session;
        },
    },
} satisfies NextAuthOptions;
