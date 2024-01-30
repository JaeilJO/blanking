import axios from 'axios';

export default async function getGroups(subkey: string) {
    return axios
        .get(`/api/groups/${subkey}`, {
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
            },
        })
        .then((res) => res.data);
}
