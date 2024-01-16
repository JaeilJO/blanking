import axios from 'axios';

export async function deletePage({ pagename, groupname }: { pagename: string; groupname: string }) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${groupname}`, {
        data: { pagename: pagename },
    });
}
