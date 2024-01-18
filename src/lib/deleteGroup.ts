import axios from 'axios';

interface DeleteGroupParams {
    groupname: string;
}

export default async function deleteGroup({ groupname }: DeleteGroupParams) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${groupname}`);
}
