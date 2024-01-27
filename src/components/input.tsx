import { InputTypes } from '../type/components.type';
import { FieldValues } from 'react-hook-form';

const ChapInput = <T extends FieldValues>({ id, label, error, access, register, ...props }: InputTypes<T>) => {
    return (
        <>
            <div className="w-[558px] flex justify-between items-center">
                <label className="text-[18px] mr-[14px] text-primary-cheese">{label}</label>
                <input
                    className="bg-primary-peanut shadow-innerPeanut w-[414px] h-[48px] rounded-[14px] focus:outline-none pl-3 text-primary-chocolate"
                    {...props}
                    {...register(id, { required: true })}
                />
            </div>
            {error ? (
                <p className="w-full ml-[144px] pl-[30px] py-[24px] text-error text-[14px]">{error}</p>
            ) : (
                <p className="w-full ml-[144px] pl-[30px] py-[24px]">&nbsp;</p>
            )}
        </>
    );
};

export default ChapInput;

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
