import axios from 'axios';

export async function createGroup({ subkey, groupname }: { subkey: string; groupname: string }) {
    return axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/groups/${subkey}`, {
        groupname,
    });
}
