import { deletePage } from '@/services/deletePage';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface deletePageParams {
    subkey: string;
    pagename: string;
    groupname: string;
    router: AppRouterInstance;
}

export default function useDeletePage({ subkey, pagename, groupname, router }: deletePageParams) {
    const { error, success } = useAlertStore((state) => state);

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => deletePage({ subkey, pagename, groupname }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            queryClient.invalidateQueries({ queryKey: ['pages'] });
            success('페이지 삭제에 성공하였습니다.');
            router.back();
        },
        onError: () => {
            error('페이지 삭제에 실패하였습니다. 다시 시도해주세요.');
        },
    });

    return { mutate };
}
