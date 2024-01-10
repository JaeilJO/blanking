import nextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string | undefined;
            name: string | undefined;
            email: string | undefined;
        };
    }
}
