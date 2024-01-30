import axios from 'axios';

export default async function getGroups(subkey: string) {
    return axios
        .get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/groups/${subkey}`, {
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
            },
        })
        .then((res) => res.data);
}
