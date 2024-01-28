import { BaseSyntheticEvent, FC, FormEvent } from 'react';
import ChapButton from '../../../../components/button';
import ChapInput from '../../../../components/input';
import FormHeader from './form-header';
import { SignUpIn } from '../../../../consts/sign-up-in';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpSchema, SignUpType } from '../../../../consts/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpField } from '../../../../type/sign.type';
import { AuthApi } from '../../../../apis/auth.api';
import { ShowProps } from '../../../../type/sign.type';

const SignUpForm: FC<ShowProps> = ({ setShowSignUpForm }) => {
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
    
    const onSubmitSignUp: SubmitHandler<SignUpType> = async (data) => {
        try {
            let result = window.confirm('모든 정보는 수정이 불가능합니다. \n 정말 이대로 제출하시겠습니까?');
            if (result) {
                await AuthApi.SignUp(data);
                alert('CHAP CHAP의 회원이 되신걸 축하합니다!');
                setShowSignUpForm(false);
            } else {
                alert('실패하였습니다')
                return false
            }
        } catch (error) {
            alert('회원가입이 정상적으로 이뤄지지 못했습니다!');
        }
    };

    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl">
            <FormHeader />
            <form className="flex w-full flex-col items-center justify-center" onSubmit={handleSubmit(onSubmitSignUp)}>
                {SignUpIn[0].map((el) => {
                    const { id, label, type } = el;
                    // fieldName의 타입을 FormField 타입으로 단언
                    const fieldName = id as SignUpField;
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
