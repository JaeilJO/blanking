import TextFieldProvider from "@/components/Organisms/TextFieldProvider";
import { TextFieldProps } from "@/components/Organisms/TextFieldProvider/index.type";

interface TextFieldPasswordProps
  extends Omit<TextFieldProps, "type" | "name" | "placeholder" | "children"> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextFieldPassword(props: TextFieldPasswordProps) {
  return (
    <TextFieldProvider
      placeholder={"Password"}
      theme={props.theme}
      type={"password"}
      name={"password"}
      textAlign={props.textAlign}
      disabled={props.disabled}
      label={props.label}
    >
      <TextFieldProvider.Label />
      <TextFieldProvider.Input onChange={props.onChange} />
      <TextFieldProvider.PasswordButton />
    </TextFieldProvider>
  );
}

export default TextFieldPassword;
