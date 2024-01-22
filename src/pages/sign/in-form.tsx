import { FC } from "react";
import ChapInput from "../../components/input";
import useInputs from "../../hooks/use-input";

const SignInForm: FC = () => {
  const [{ nickName, password }, onChangeInputs] = useInputs({
    nickName: "",
    password: "",
  });

  console.log();

  return (
    <form>
      <ChapInput
        name="nickName"
        label={"닉네임"}
        type={"text"}
        onChange={onChangeInputs}
      />
      <ChapInput
        name="password"
        label={"비밀번호"}
        type={"password"}
        onChange={onChangeInputs}
      />
    </form>
  );
};
export default SignInForm;
