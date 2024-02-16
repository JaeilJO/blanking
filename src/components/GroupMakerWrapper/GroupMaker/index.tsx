'use client';

// Utils
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useCreateGroup from '@/hooks/useCreateGroup';

// Style
import style from './index.module.scss';

// Icons
import { BsPlusCircle } from 'react-icons/bs';

function GroupMaker() {
    const [groupname, setGroupname] = useState<string>('');

    const session = useSession();
    const subkey = session.data?.user.subkey as string;
    const router = useRouter();

    const { mutate } = useCreateGroup({ subkey, groupname, router, isModal: false });

    const groupnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupname(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    return (
        <form className={style.group_maker_form} onSubmit={handleSubmit}>
            <label className={style.group_maker_submit_button} htmlFor="group_maker_submit">
                <BsPlusCircle />
            </label>

            <input id="group_maker_submit" className={style.group_maker_submit} type="submit" />
            <input
                required
                onChange={groupnameHandler}
                type="text"
                className={style.group_maker_text_input}
                placeholder="Group 이름을 입력해주세요"
            />
        </form>
    );
}

export default GroupMaker;
