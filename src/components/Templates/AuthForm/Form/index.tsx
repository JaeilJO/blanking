import Form from "@/components/Atoms/Form";
import { FormEvent, createContext, useContext, useState } from "react";

const AuthFormContext = createContext({});

interface AuthFormContainerProps {
  children: React.ReactNode;
  onSubmit: any;
}

function AuthFormContainer({ children, onSubmit }: AuthFormContainerProps) {
  // 다른 컴포넌트에서 나눌 상태들
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await onSubmit(formData);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <AuthFormContext.Provider value={[loading, error, onSubmitHandler]}>
      <Form.Column>{children}</Form.Column>
    </AuthFormContext.Provider>
  );
}

export default AuthFormContainer;
