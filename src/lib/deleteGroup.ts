import axios from 'axios';

interface DeleteGroupParams {
    groupname: string;
    subkey: string;
}

export default async function deleteGroup({ groupname, subkey }: DeleteGroupParams) {
    return axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${subkey}/${groupname}`);
}
