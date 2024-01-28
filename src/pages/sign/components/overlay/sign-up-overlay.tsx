import { FC } from "react"
import { FormIcon } from "../../../../assets/icon"
import ChapButton from "../../../../components/button"
import { OverlayProps } from "../../../../type/sign.type"

const SignUpOverlay: FC<OverlayProps> = ({ onChangeForm }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl bg-primary-cheese">
      <img src={FormIcon.formLogo} alt="Form Logo" />
      <div className="my-20 flex flex-col items-center justify-center  text-primary-peanut ">
        <p className="text-superLarge font-regular">이미 회원이신가요?</p>
        <p className="mt-4 text-superLarge font-regular">아래 로그인 버튼을 눌러주세요!</p>
      </div>
      <ChapButton variant={"cheese"} size={"rounded"} type={"button"} onClick={onChangeForm}>
        로그인
      </ChapButton>
    </div>
  )
}

export default SignUpOverlay
