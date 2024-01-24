import axios from 'axios';

export async function getPages({ groupname, subkey }: { groupname: string; subkey: string }) {
    return axios
        .get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpages/${subkey}/${groupname}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.data);
}
