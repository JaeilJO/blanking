"use client";

import Form from "@/components/Atoms/Form";

import { FormEvent, useContext, useRef } from "react";
import { UserInfoFormContext } from "..";
import { ColumnFormProps } from "@/components/Atoms/Form/ColumnForm";

interface UserInfoFormProps extends ColumnFormProps {
  children: React.ReactNode;
  onSubmit: any;
}

function UserInfoForm({
  children,
  onSubmit,
  gap,
  ...props
}: UserInfoFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const value = useContext(UserInfoFormContext);
  const { formData, loading, setLoading } = value!;

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    const $formElement = ref.current as HTMLFormElement;

    const datas = formData.current;

    await onSubmit(datas);

    $formElement.reset();
    setLoading(false);
  };

  return (
    <Form.Column ref={ref} onSubmit={onSubmitHandler} gap={gap} {...props}>
      {children}
    </Form.Column>
  );
}

export default UserInfoForm;
