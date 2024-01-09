import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';

export const config = {
    providers: [],
} satisfies NextAuthOptions;

export function auth(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, config);
}
