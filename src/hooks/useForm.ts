import { on } from 'events';
import React from 'react';

const useForm = () => {
    const defaultValues: { [key: string]: string } = {};
    const inputs: { [key: string]: HTMLInputElement } = {};

    const resetInputValue = () => {
        for (let key in inputs) {
            inputs[key].value = '';
        }
    };

    const register = (name: string) => {
        const ref = React.useRef<HTMLInputElement>();
        inputs[name] = ref.current as HTMLInputElement;
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            defaultValues[name] = ref.current?.value as string;
        };

        return { onChange, name, ref };
    };

    return { defaultValues, register, resetInputValue };
};

export default useForm;
