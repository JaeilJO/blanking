import axios from 'axios';

interface DeleteGroupParams {
    groupname: string;
    subkey: string;
}

export default async function deleteGroup({ groupname, subkey }: DeleteGroupParams) {
    return axios.delete(`/api/group/${subkey}/${groupname}`);
}
