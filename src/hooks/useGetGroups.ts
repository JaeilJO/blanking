import getGroups from '@/lib/getGroups';
import { useQuery } from '@tanstack/react-query';

interface useGetGroupsParasm {
    subkey: string;
}

export default function useGetGroups({ subkey }: useGetGroupsParasm) {
    //Group 정보 가져오기
    const { data, isLoading, isError } = useQuery({
        queryKey: ['navigation'],
        queryFn: () => getGroups(subkey),
    });

    return { data, isLoading, isError };
}
