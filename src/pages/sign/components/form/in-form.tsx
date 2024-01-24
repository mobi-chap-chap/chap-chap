import { FC } from 'react';
import ChapButton from '../../../../components/button';
import ChapInput from '../../../../components/input';
import FormHeader from './form-header';

const SignInForm: FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl bg-primary-peanut">
            <FormHeader />
            <form className="flex w-full flex-col items-center justify-center my-[40px]">
                <ChapInput label={'아이디'} type={'text'} />
                <ChapInput label={'비밀번호'} type={'text'} />
            </form>
            <ChapButton variant={'peanut'} size={'rounded'} type={'submit'}>
                로그인
            </ChapButton>
        </div>
    );
};

export default SignInForm;
