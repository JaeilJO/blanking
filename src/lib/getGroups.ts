import axios from 'axios';

export default async function getGroups(subkey: string) {
    return axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/groups/${subkey}`).then((res) => res.data);
}
