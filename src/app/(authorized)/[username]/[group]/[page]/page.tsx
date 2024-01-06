import EditorJs from '@/components/EditorJs';
import { basic_mock } from '@/mock/basic';

function Page({ params }: { params: { page: string } }) {
    const user = basic_mock;
    console.log(params);
    const group = user.groups.filter((group) => group.groupname === params.group);

    const page = group[0]?.pages?.filter((page) => page.pagename === params.page)[0];
    console.log(page?.content);
    return (
        <div>
            {params.page}

            <EditorJs data={page?.content} />
        </div>
    );
}

export default Page;
