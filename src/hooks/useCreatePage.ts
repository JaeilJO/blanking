import { createPage } from '@/services/createPage';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface useCreatePageParams {
    subkey: string;
    groupname: string;
    pagename: string;
    router: AppRouterInstance;
}

export default function useCreatePage({ subkey, groupname, pagename, router }: useCreatePageParams) {
    const { error, success } = useAlertStore((state) => state);
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => createPage({ subkey, groupname, pagename }),
        onSuccess: () => {
            success('페이지 생성에 성공했습니다');
            queryClient.invalidateQueries({ queryKey: ['pages'] });
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.back();
        },
        onError: (e: AxiosError) => {
            if (e.request?.status === 409) {
                error('Page이름 변경에 실패했습니다. 다시 시도해주시겠습니까?');
            }

            if (e.request?.status === 403) {
                error('이미 사용되고 있는 Page 이름입니다.');
            }

            if (e.request?.status === 422) {
                error('특수문자를 제외한 영어 대 소문자 혹은 한글만을 사용해주세요');
            }
        },
    });
    return { mutate };
}
