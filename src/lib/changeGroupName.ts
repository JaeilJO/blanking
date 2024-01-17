import axios from 'axios';

export async function changeGroupName({
    userid,
    groupname,
    new_groupname,
}: {
    userid: string;
    groupname: string;
    new_groupname: string;
}) {
    return axios.patch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${userid}/${groupname}`, {
        data: {
            new_groupname,
        },
    });
}
