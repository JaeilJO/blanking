import axios from 'axios';

export async function createGroup({ userid, groupname }: { userid: string; groupname: string }) {
    return axios.post(`/api/group/${userid}`, {
        groupname,
    });
}
