const useForm = () => {
    const defaultValues: { [key: string]: string } = {};

    const register = (name: string) => {
        defaultValues[name] = '';

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            defaultValues[name] = value;
        };

        return { onChange };
    };

    return { defaultValues, register };
};

export default useForm;
