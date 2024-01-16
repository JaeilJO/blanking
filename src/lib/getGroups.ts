import axios from 'axios';

export default async function getGroups(userid: string) {
    return axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/groups/${userid}`).then((res) => res.data);
}
