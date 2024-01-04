function Page({ params }: { params: { page: string } }) {
    return <div>{params.page}</div>;
}

export default Page;
