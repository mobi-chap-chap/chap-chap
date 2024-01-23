import { FC } from 'react';
import { FormIcon } from '../../../../assets/icon';
import ChapButton from '../../../../components/button';
import { OverlayProps } from './type/overlay.type';

const SignUpOverlay: FC<OverlayProps> = ({ onChangeForm }) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-primary-cheese rounded-l-3xl">
            <img src={FormIcon.formLogo} alt="Form Logo" />
            <div className="flex flex-col items-center justify-center my-20  text-primary-peanut ">
                <p className="text-superLarge font-regular">이미 회원이신가요?</p>
                <p className="text-superLarge font-regular mt-4">아래 로그인 버튼을 눌러주세요!</p>
            </div>
            <ChapButton variant={'cheese'} size={'rounded'} type={'button'} onClick={onChangeForm}>
                로그인
            </ChapButton>
        </div>
    );
};

export default SignUpOverlay;
