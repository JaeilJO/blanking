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
/**
 * User 정보를 전달하는 Form을 만들기위한 Component

 * name
  - input의 name은 db에 저장되는 이름으로 사용

 * loading Status
  - loading을 감지하고 loadingd인 경우 disabled를 true로 변경

 * Form
  - Form에 들어가는 onSubmit함수는 onSubmitHandler의 콜백함수로 전달
  - onSumbmit함수는 Form의 data를 아무과정없이 받아와서 사용 가능
  
 */
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
