import { FC } from "react"
import ChapButton from "../../../../components/button"
import ChapInput from "../../../../components/input"
import FormHeader from "./form-header"
import { SignUpIn } from "../../../../consts/sign-up-in"
import { SignInField } from "../../../../type/sign.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInSchema, SignInType } from "../../../../consts/form-schema"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../../context/auth.ctx"
import UseNavigation from "../../../../hooks/use-navigation"
import { AuthApi } from "../../../../apis/auth.api"

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    mode: "all",
    defaultValues: {
      userId: "",
      password: "",
    },
  })

  const { signIn } = useAuth()
  const { goToMainPage } = UseNavigation()

  const onSubmitSignIn = async (data: SignInType) => {
    try {
      await AuthApi.SignIn(data)
      signIn(data.tokenForHeader)
      goToMainPage()
    } catch (error) {
      alert("로그인에 실패하였습니다")
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl bg-primary-peanut">
      <FormHeader />
      <form
        className="my-[40px] flex w-full flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmitSignIn)}
      >
        {SignUpIn[1].map(el => {
          const { id, label, type } = el
          // fieldName의 타입을 FormField 타입으로 단언
          const fieldName = id as SignInField
          /**
           * register에  함수의 동작에 대한 타입 정보를 제공
           * 사용하지않으면 명확한 타입 정보를 알 수 없음
           */
          return (
            <ChapInput
              key={id}
              id={id}
              label={label}
              type={type}
              register={register}
              error={errors[fieldName]?.message}
            />
          )
        })}
        <ChapButton variant={"peanut"} size={"rounded"} type={"submit"} disabled={!isValid}>
          로그인
        </ChapButton>
      </form>
    </div>
  )
}

export default SignInForm
