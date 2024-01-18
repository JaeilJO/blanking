import axios from 'axios';

export async function changePageName({
    pagename,
    groupname,
    new_pagename,
}: {
    pagename: string;
    groupname: string;
    new_pagename: string;
}) {
    console.log(new_pagename);
    return axios
        .patch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${groupname}/${pagename}`, {
            data: {
                new_pagename,
            },
        })
        .then((res) => res);
}
