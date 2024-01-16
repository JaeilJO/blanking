import axios from 'axios';

interface DeleteGroupParams {
    userid: string;
    groupname: string;
}

export default async function deleteGroup({ userid, groupname }: DeleteGroupParams) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${userid}`, {
        data: {
            groupname: groupname,
        },
    });
}
