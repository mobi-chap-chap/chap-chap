import { FC } from "react"
import { FormIcon } from "../../../../assets/icon"
import ChapButton from "../../../../components/button"
import { OverlayProps } from "../../../../type/sign.type"

const LoginOverlay: FC<OverlayProps> = ({ onChangeForm }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img src={FormIcon.formLogo} alt="Form Logo" className="" />
      <div className="my-20 flex flex-col items-center justify-center text-primary-peanut ">
        <p className="text-superLarge font-regular">아직 회원이 아니신가요?</p>
        <p className="mt-4 text-superLarge font-regular">회원가입은 아래 버튼을 눌러주세요!</p>
      </div>
      <ChapButton variant={"cheese"} size={"rounded"} type={"button"} onClick={onChangeForm}>
        회원가입
      </ChapButton>
    </div>
  )
}

export default LoginOverlay
