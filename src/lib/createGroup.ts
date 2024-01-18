import axios from 'axios';

export async function createGroup({ userid, groupname }: { userid: string; groupname: string }) {
    return axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/groups/${userid}`, {
        groupname,
    });
}
