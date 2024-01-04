function Page({ params }: { params: { group: string } }) {
    return <div>{params.group}</div>;
}

export default Page;
