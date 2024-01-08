import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    // Configure one or more authentication providers
    pages: {
        signIn: '/',
        newUser: '/signup',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {},
            async authorize(credentials, req) {
                const email = await credentials?.email;
                const password = await credentials?.password;

                if (email === 'whwodlf97@gmail.com' && password === '1234') {
                    console.log('helo');
                    return { email: 'email' };
                }
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
