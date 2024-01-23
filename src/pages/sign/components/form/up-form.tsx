import { FC } from 'react';
import ChapButton from '../../../../components/button';
import ChapInput from '../../../../components/input';
import FormHeader from './form-header';

const SignUpForm: FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl">
            <FormHeader />
            <form className="flex w-full flex-col items-center justify-center">
                <ChapInput label={'별명'} type={'text'} />
                <ChapInput label={'아이디'} type={'text'} />
                <ChapInput label={'비밀번호'} type={'text'} />
                <ChapInput label={'비밀번호 확인'} type={'text'} />
                <ChapButton variant={'peanut'} size={'rounded'} type={'submit'}>
                    회원가입
                </ChapButton>
            </form>
        </div>
    );
};

export default SignUpForm;
