import axios from 'axios';

interface deletePageParams {
    subkey: string;
    pagename: string;
    groupname: string;
}

export async function deletePage({ subkey, pagename, groupname }: deletePageParams) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${subkey}/${groupname}`, {
        data: { pagename: pagename },
    });
}
