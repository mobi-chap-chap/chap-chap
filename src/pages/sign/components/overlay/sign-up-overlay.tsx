import React, { ReactEventHandler } from 'react';
import formLogo from '../../../../assets/icons/form-logo.png';

type SignUpOverlayProps = {
    onChangeForm: ReactEventHandler;
};

const SignUpOverlay: React.FC<SignUpOverlayProps> = ({ onChangeForm }) => {
    return (
        // 안깎여...
        <div className="flex h-full w-full flex-col items-center justify-center bg-primary-cheese rounded-l-3xl">
            <img src={formLogo} alt="Form Logo" className="flex flex-col items-center justify-center my-10" />
            <div className="flex flex-col items-center justify-center my-10">
                <p className="text-superLarge font-regular">이미 회원이신가요?</p>
                <p className="text-superLarge font-regular mt-4">아래 로그인 버튼을 눌러주세요!</p>
            </div>
            <button onClick={onChangeForm}>로그인</button>
        </div>
    );
};

export default SignUpOverlay;
