"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";

import UserInfoFormSubmitButton from "./SubmitButton";
import Input from "./Input";
import UserInfoFormContainer from "./Form";

// UserInfoFormContextType
export type UserInfoFormContextType = {
  formData: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

// UserInfoFormContext
export const UserInfoFormContext = createContext<UserInfoFormContextType>({
  formData: {},
  loading: false,
  setLoading: () => {},
});

function UserInfoForm({ children }: { children: React.ReactNode }) {
  const formData = useRef({});
  const [loading, setLoading] = useState(false);

  return (
    <UserInfoFormContext.Provider value={{ formData, loading, setLoading }}>
      {children}
    </UserInfoFormContext.Provider>
  );
}

UserInfoForm.Form = UserInfoFormContainer;
UserInfoForm.SubmitButton = UserInfoFormSubmitButton;
UserInfoForm.Input = Input;

export default UserInfoForm;
