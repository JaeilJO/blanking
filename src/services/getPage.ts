import axios from 'axios';

export async function getPage({ pagename, groupname }: { pagename: string; groupname: string }) {
    return axios
        .get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${groupname}/${pagename}`)
        .then((res) => res.data);
}
