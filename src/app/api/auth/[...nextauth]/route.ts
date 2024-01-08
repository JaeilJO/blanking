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

            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;

                if (email === 'whwodlf97@gmail.com' && password === '1234') {
                    console.log('맞음');
                    const user = await { id: 1, email };

                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST };
