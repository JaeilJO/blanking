import axios from 'axios';

export async function getPages({ groupname }: { groupname: string }) {
    return axios
        .get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpages/${groupname}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.data);
}
