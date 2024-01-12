export type User = {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    groups: Group[];
};

export type Group = {
    id: number;
    userid: string;
    groupname: string;
    createdAt: string;
    updatedAt: string;
    pages: Page[];
};

export type Page = {
    id: number;
    content: any;
    groupid: number;

    pagename: string;
    createdAt: string;
    updatedAt: string;
};
