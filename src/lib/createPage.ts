import axios from 'axios';

export async function createPage({ groupname, pagename }: { groupname: string; pagename: string }) {
    return axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${groupname}`, { data: { pagename } });
}
