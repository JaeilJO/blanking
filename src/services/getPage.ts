import axios from 'axios';

export async function getPage({
    subkey,
    pagename,
    groupname,
}: {
    subkey: string;
    pagename: string;
    groupname: string;
}) {
    return axios
        .get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${subkey}/${groupname}/${pagename}`)
        .then((res) => res.data);
}
