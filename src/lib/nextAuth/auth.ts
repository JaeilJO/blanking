import { type NextAuthOptions, type Session } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { JWT } from "next-auth/jwt";

import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const NextAuthOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { key: "email", type: "email" },
        password: { key: "password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const prisma = new PrismaClient();
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        const user = await prisma.user.findFirstOrThrow({
          where: {
            email,
            account_type: "credentials",
          },
        });

        if (!user) {
          return null;
        }

        if (user) {
          const checking_password = await bcrypt.compare(
            password,
            user.password as string
          );

          if (!checking_password) {
            return null;
          }
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const signedUser = await prisma.user.findFirst({
          where: {
            email: user?.email as string,
            account_type: "google",
          },
        });

        if (!signedUser) {
          const subkey = uuidv4();
          await prisma.user.create({
            data: {
              email: user?.email as string,
              name: user?.name as string,
              account_type: "google",
              subkey,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          });
        }
      }
      return true;
    },

    async jwt({ token, account, profile }) {
      const account_type = account?.provider as string;

      if (account) {
        const userdata = await prisma.user.findFirst({
          where: {
            email: account?.email as string,
            account_type,
          },
          select: {
            subkey: true,
            account_type: true,
          },
        });
        token.subkey = userdata?.subkey;
        token.account_type = userdata?.account_type;
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.account_type = token.account_type as string;
      session.user.subkey = token.subkey as string;

      return session;
    },
  },
} satisfies NextAuthOptions;
