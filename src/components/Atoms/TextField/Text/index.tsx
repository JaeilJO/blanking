import TextFieldProvider from "@/components/Organisms/TextFieldProvider";
import { TextFieldProps } from "@/components/Organisms/TextFieldProvider/index.type";

interface TextFieldTextProps extends Omit<TextFieldProps, "type"> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
}

function TextFieldText(props: TextFieldTextProps) {
  return (
    <TextFieldProvider
      placeholder={props.placeholder}
      theme={props.theme}
      type={props.type}
      name={props.name}
      textAlign={props.textAlign}
      disabled={props.disabled}
      label={props.label}
    >
      <TextFieldProvider.Label />
      <TextFieldProvider.Input onChange={props.onChange} />
    </TextFieldProvider>
  );
}

export default TextFieldText;
