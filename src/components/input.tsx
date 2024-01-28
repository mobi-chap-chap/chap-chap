import { InputTypes } from "../type/components.type"
import { FieldValues } from "react-hook-form"

const ChapInput = <T extends FieldValues>({ id, label, error, access, register, ...props }: InputTypes<T>) => {
  return (
    <>
      <div className="flex w-[558px] items-center justify-between">
        <label className="mr-[14px] text-[18px] text-primary-cheese">{label}</label>
        <input
          className="h-[48px] w-[414px] rounded-[14px] bg-primary-peanut pl-3 text-primary-chocolate shadow-innerPeanut focus:outline-none"
          {...props}
          {...register(id, { required: true })}
        />
      </div>
      {error ? (
        <p className="ml-[144px] w-full py-[24px] pl-[30px] text-[14px] text-error">{error}</p>
      ) : (
        <p className="ml-[144px] w-full py-[24px] pl-[30px]">&nbsp;</p>
      )}
    </>
  )
}

export default ChapInput

/**
 * 사용 예시
 *
 * @example
 *
 * const SignInForm:FC = () => {
 * const [{nickName, password}, onChangeInputs] = useInputs({
 *  nickName: '',
 *  password: '',
 * })
 *
 * return(
 *   <form>
 *      <ChapInput name="nickName" label={"닉네임"} type={"text"} onChange={onChangeInputs} />
 *      <ChapInput name="password" label={"비밀번호"} type={"password"} onChange={onChangeInputs} />
 *  </form>
 * )
 *
 */
