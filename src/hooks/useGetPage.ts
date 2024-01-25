import { getPage } from '@/services/getPage';
import { useQuery } from '@tanstack/react-query';

interface GetPageParams {
    subkey: string;
    pagename: string;
    groupname: string;
}

export default function useGetpage({ subkey, pagename, groupname }: GetPageParams) {
    const { data, isLoading } = useQuery({
        queryKey: ['page', pagename],
        queryFn: () => getPage({ subkey, pagename, groupname }),
    });

    return { data, isLoading };
}
