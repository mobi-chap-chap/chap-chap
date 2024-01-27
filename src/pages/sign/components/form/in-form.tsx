import { FC } from 'react';
import ChapButton from '../../../../components/button';
import ChapInput from '../../../../components/input';
import FormHeader from './form-header';
import { SignUpIn } from '../../../../consts/sign-up-in';
import { FormField } from './form.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, SignUpType } from '../../../../consts/form-schema';
import { useForm } from 'react-hook-form';

const SignInForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<SignUpType>({
        resolver: zodResolver(SignInSchema),
        mode: 'all',
        defaultValues: {
            userId: '',
            password: '',
        },
    });

    // const { signIn } = useAuth();
    // const navigate = useNavigate();

    // const onSubmitSignIn = handleSubmit(async (data) => {
    //     try {
    //         const res = await AuthApi.signIn(data.email, data.password);
    //         signIn(res.token);
    //         // console.log("27", res.token); // 줄 수 적기
    //         navigate('/todo');
    //         return res;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // });

    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl bg-primary-peanut">
            <FormHeader />
            <form className="flex w-full flex-col items-center justify-center my-[40px]">
                {SignUpIn[1].map((el) => {
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
            </form>
            <ChapButton variant={'peanut'} size={'rounded'} type={'submit'} disabled={!isValid}>
                로그인
            </ChapButton>
        </div>
    );
};

export default SignInForm;
