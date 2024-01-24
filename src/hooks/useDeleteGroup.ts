import deleteGroup from '@/services/deleteGroup';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface useDeleteGroupParams {
    groupname: string;
    subkey: string;
    router: AppRouterInstance;
}

export default function useDeleteGroup({ groupname, subkey, router }: useDeleteGroupParams) {
    const queryClient = useQueryClient();

    const { error, success } = useAlertStore((state) => state);

    const { mutate } = useMutation({
        mutationFn: () => deleteGroup({ groupname, subkey }),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            success('그룹 삭제에 성공하였습니다.');
            router.back();
        },

        onError: () => {
            error('그룹 삭제에 실패하였습니다. 다시 시도해주시겠습니까?');
        },
    });

    return { mutate };
}
