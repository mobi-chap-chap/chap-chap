import React, { ReactEventHandler } from 'react';
import formLogo from '../../../../assets/icons/form-logo.svg';
import ChapButton from '../../../../components/button';

type LoginOverlayProps = {
    onChangeForm: ReactEventHandler;
};

const LoginOverlay: React.FC<LoginOverlayProps> = ({ onChangeForm }) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <img src={formLogo} alt="Form Logo" className="" />
            <div className="flex flex-col items-center justify-center my-20">
                <p className="text-superLarge font-regular">아직 회원이 아니신가요?</p>
                <p className="text-superLarge font-regular mt-4">회원가입은 아래 버튼을 눌러주세요!</p>
            </div>
            <ChapButton variant={'cheese'} size={'rounded'} type={'button'} onClick={onChangeForm}>
                회원가입
            </ChapButton>
        </div>
    );
};

export default LoginOverlay;
