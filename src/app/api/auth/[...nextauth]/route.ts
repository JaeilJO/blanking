import { NextAuthOption } from '@/lib/nextAuth/auth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(NextAuthOption);

export { handler as GET, handler as POST };
