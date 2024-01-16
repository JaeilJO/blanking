interface getGroupsArguemnts {
    userid: string;
}

export default async function getGroups({ userid }: getGroupsArguemnts) {
    console.log('userid', userid);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group/${userid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: ['groups'],
        },
    });

    if (!res.ok) {
        throw new Error('그룹을 불러오는데 실패하였습니다.');
    }

    return res.json();
}
