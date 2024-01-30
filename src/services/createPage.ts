import axios from 'axios';

interface createPageParams {
    subkey: string;
    groupname: string;
    pagename: string;
}

export async function createPage({ subkey, groupname, pagename }: createPageParams) {
    return axios.post(`/api/userpage/${subkey}/${groupname}`, {
        data: { pagename },
    });
}
