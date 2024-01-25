import axios from 'axios';

export async function changePageName({
    subkey,
    pagename,
    groupname,
    new_pagename,
}: {
    subkey: string;
    pagename: string;
    groupname: string;
    new_pagename: string;
}) {
    return axios
        .patch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${subkey}/${groupname}/${pagename}`, {
            data: {
                new_pagename,
            },
        })
        .then((res) => res);
}
