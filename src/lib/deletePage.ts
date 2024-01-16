import axios from 'axios';

export async function deletePage({ pagename }: { pagename: string }) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage`, { data: { pagename: pagename } });
}
