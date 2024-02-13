import { createGroup } from '@/services/createGroup';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface useCreateGroupPrams {
    subkey: string;
    groupname: string;
    router: AppRouterInstance;
    isModal: boolean;
}

export default function useCreateGroup({ subkey, groupname, router, isModal }: useCreateGroupPrams) {
    const queryClient = useQueryClient();
    const { error, success } = useAlertStore((state) => state);
    const { mutate } = useMutation({
        mutationFn: () => createGroup({ subkey, groupname }),

        onSuccess: () => {
            success('그룹 생성이 완료되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            isModal ? router.back() : router.replace('/user');
        },
        onError: (e: AxiosError) => {
            if (e.request?.status === 409) {
                error('이미 존재하는 그룹입니다.');
            }

            if (e.request?.status === 400) {
                error('그룹 생성에 실패했습니다. 다시 시도해주시겠습니까?');
            }

            if (e.request?.status === 422) {
                error('특수문자를 제외한 영어 대 소문자 혹은 한글만을 사용해주세요');
            }
        },
    });

    return { mutate };
}
