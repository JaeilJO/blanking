import { ChangeEvent, FormEvent, useState } from "react";

export default function useForm(initialValues: { [key: string]: string }) {
  const [values, setValues] = useState(initialValues);

  const register = (name: string) => ({
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value });
    },
  });

  const handleSubmit =
    (callback: (values: { [key: string]: string }) => void) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      callback(values);

      // Reset form
      for (const i in values) {
        (e.target as HTMLFormElement)[i].value = "";
      }
    };

  return { register, handleSubmit };
}
