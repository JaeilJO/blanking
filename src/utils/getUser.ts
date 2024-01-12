export default async function getUser(userid: string) {
    const user = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: `userid=${userid}`,
        },
        credentials: 'include',
    });

    const userinfo = await user.json();
    return userinfo;
}
