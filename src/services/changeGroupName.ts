import axios from 'axios';

interface changeGroupNameParams {
    groupname: string;
    new_groupname: string;
    subkey: string;
}

export async function changeGroupName({ groupname, new_groupname, subkey }: changeGroupNameParams) {
    return axios.patch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${subkey}/${groupname}`, {
        data: {
            new_groupname,
        },
    });
}
