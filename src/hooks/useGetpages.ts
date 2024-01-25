import { getPages } from '@/services/getPages';
import { useQuery } from '@tanstack/react-query';

export default function useGetPages({ groupname, subkey }: { groupname: string; subkey: string }) {
    const { data, isLoading } = useQuery({
        queryKey: ['pages', { groupname }],
        queryFn: () => getPages({ groupname, subkey }),
    });

    return { data, isLoading };
}
