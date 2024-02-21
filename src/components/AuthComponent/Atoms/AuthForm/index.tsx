// Style
import style from "./index.module.scss";

interface AuthFromProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  /**
   * AuthForm에는 AuthInput과 AuthButton만이 들어가게 해주세요
   */
  children: React.ReactNode;
}

function AuthFrom({ onSubmit, children }: AuthFromProps) {
  return (
    <form className={style["form"]} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default AuthFrom;
