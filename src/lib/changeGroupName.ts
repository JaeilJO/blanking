import axios from 'axios';

interface changeGroupNameParams {
    groupname: string;
    new_groupname: string;
}

export async function changeGroupName({ groupname, new_groupname }: changeGroupNameParams) {
    return axios.patch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${groupname}`, {
        data: {
            new_groupname,
        },
    });
}
