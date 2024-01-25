import axios from 'axios';

interface createPageParams {
    subkey: string;
    groupname: string;
    pagename: string;
}

export async function createPage({ subkey, groupname, pagename }: createPageParams) {
    return axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${subkey}/${groupname}`, {
        data: { pagename },
    });
}
