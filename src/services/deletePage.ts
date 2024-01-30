import axios from 'axios';

interface deletePageParams {
    subkey: string;
    pagename: string;
    groupname: string;
}

export async function deletePage({ subkey, pagename, groupname }: deletePageParams) {
    return axios.delete(`/api/userpage/${subkey}/${groupname}`, {
        data: { pagename: pagename },
    });
}
