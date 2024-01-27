import { FC } from 'react';
import ChapButton from '../../../../components/button';
import ChapInput from '../../../../components/input';
import FormHeader from './form-header';
import { SignUpIn } from '../../../../consts/sign-up-in';
import { useForm } from 'react-hook-form';
import { SignUpSchema, SignUpType } from '../../../../consts/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from './form.type';
import { AuthApi } from '../../../../apis/auth.api';

const SignUpForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<SignUpType>({
        resolver: zodResolver(SignUpSchema),
        mode: 'all',
        defaultValues: {
            nickname: '',
            userId: '',
            password: '',
            checkPw: '',
        },
    });

    // console.log('isValid', isValid);
    console.log(errors);

    const onSubmitSignUp = handleSubmit(async (data) => {
        try {
            const res = await AuthApi.SignUp(data.userId, data.password);
            if (res && res.status === 200) {
                console.log(`res`, res);
            }
            return res;
        } catch (error) {
            console.error(error);
        }
    });

    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl">
            <FormHeader />
            <form
                className="flex w-full flex-col items-center justify-center"
                onSubmit={handleSubmit((data) => console.log('submit', data))}
            >
                {SignUpIn[0].map((el) => {
                    const { id, label, type } = el;
                    // fieldName의 타입을 FormField 타입으로 단언
                    const fieldName = id as FormField;
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
                    );
                })}

                <ChapButton variant={'peanut'} size={'rounded'} type={'submit'} disabled={!isValid}>
                    회원가입
                </ChapButton>
            </form>
        </div>
    );
};

export default SignUpForm;

/*
 *  Zod는 스키마를 기준으로 타입스크립트 타입을 알아서 추론할 수도 있는데요.
 * 이 기능을 잘 활용하면 아예 타입을 따로 작성할 필요가 없어지고 따라서 타입을 스키마와 서로 맞춰 줄 걱정이 사라집니다.
 */

{
    /* <div className="w-[558px] flex justify-between items-center">
    <label className="text-[18px] mr-[14px] text-primary-cheese">{'nickname'}</label>
    <input
        className="bg-primary-peanut shadow-innerPeanut w-[414px] h-[48px] rounded-[14px] focus:outline-none pl-3 text-primary-chocolate"
        {...register('nickname')}
    />
    {errors.nickname && (
        <span className="w-full ml-[144px] pl-[30px] py-[15px] text-error text-[14px]">{errors.nickname.message}</span>
    )}
</div>; */
}
