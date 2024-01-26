import nextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            name: string | undefined;
            email: string | undefined;
            subkey: string | undefined;
            account_type: string | undefined;
        };
    }
}
