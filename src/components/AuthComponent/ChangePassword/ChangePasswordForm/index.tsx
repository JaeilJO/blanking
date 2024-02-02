'use client';

// Utils
import { useAlertStore } from '@/zustand/alertStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Components
import AuthCommon from '../../AuthCommon';
import Form from '../../AuthCommon/Form';
import ChangePasswordLoading from '../ChangePasswordLoading';

interface ChangePasswordFormProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    subkey: string;
    form: { email: string; password: string };
    isLoading: boolean;
    setForm: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
}

function ChangePasswordForm({ setIsLoading, subkey, form, isLoading, setForm }: ChangePasswordFormProps) {
    const { error, success } = useAlertStore((state) => state);
    const router = useRouter();

    const onSubmitChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.patch(`/api/changePassword/${subkey}`, {
                password: form.password,
            });
            setIsLoading(false);
            success('비밀번호 변경이 완료되었습니다. 다시 로그인을 시도해주세요');
            router.replace('/auth/signin');
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.request?.status === 406) {
                    setIsLoading(false);
                    error('비밀번호는 영문 대문자 혹은 소문자 중 하나 그리고 숫자를 조합시켜주세요');
                }
                if (e.request?.status === 405) {
                    setIsLoading(false);
                    error('비밀번호 변경에 실패했습니다. 새로고침 후 다시 시도해주세요');
                }
                if (e.request?.status === 403) {
                    setIsLoading(false);
                    error('최근에 사용한 비밀번호입니다.');
                }
            }

            setIsLoading(false);
        }
    };
    return (
        <div>
            <AuthCommon.Title title="비밀번호 찾기" welcome_message="새로운 비밀번호를 입력해주세요" />

            {isLoading ? (
                <ChangePasswordLoading />
            ) : (
                <Form.FormWrapper onSubmit={onSubmitChangePassword}>
                    <Form.Input.PasswordInput setForm={setForm} />
                    <Form.SubmitButton value="비밀번호 변경하기" />
                    <AuthCommon.AccountInquery authType="changePassword" />
                </Form.FormWrapper>
            )}
        </div>
    );
}

export default ChangePasswordForm;
