import axios from 'axios';

export async function getPages({ groupname }: { groupname: string }) {
    return axios
        .get(`/api/userpages/${groupname}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.data);
}
