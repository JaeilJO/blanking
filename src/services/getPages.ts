import axios from 'axios';

export async function getPages({ groupname, subkey }: { groupname: string; subkey: string }) {
    return axios
        .get(`/api/userpages/${subkey}/${groupname}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.data);
}
