import { changeGroupName } from '@/services/changeGroupName';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface useChangeGroupNameParams {
    groupname: string;
    new_groupname: string;
    subkey: string;
    router: AppRouterInstance;
}

export default function useChangeGroupName({ groupname, new_groupname, subkey, router }: useChangeGroupNameParams) {
    const { error, success } = useAlertStore((state) => state);

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => changeGroupName({ groupname, new_groupname, subkey }),

        onSuccess: (res) => {
            const message = res.data;

            success(message);

            queryClient.invalidateQueries({ queryKey: ['navigation'] });

            router.back();
        },

        onError: (e: AxiosError) => {
            if (e.request?.status === 409) {
                error('Group이름 변경에 실패했습니다. 다시 시도해주시겠습니까?');
            }

            if (e.request?.status === 403) {
                error('이미 사용되고 있는 Group 이름입니다.');
            }

            if (e.request?.status === 422) {
                error('특수문자를 제외한 영어 대 소문자 혹은 한글만을 사용해주세요');
            }

            if (e.request?.status === 423) {
                error('기존 Group 이름과 동일합니다.');
            }
        },
    });

    return { mutate };
}
