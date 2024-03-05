import Button from "@/components/Atoms/Button";
import { UrlObject } from "url";

function NavigationLink({ href }: { href: string | UrlObject }) {
  return (
    <Button.LineButton
      type="link"
      href={href}
      theme="transparent"
    ></Button.LineButton>
  );
}

export default NavigationLink;
