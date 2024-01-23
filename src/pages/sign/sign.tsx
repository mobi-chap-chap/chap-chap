import SignInForm from './components/form/in-form';
import SignUpForm from './components/form/up-form';
import { useState } from 'react';
import SignUpOverlay from './components/overlay/sign-up-overlay';
import LoginOverlay from './components/overlay/login-overlay';

const Sign = () => {
    const [isChangeForm, setIsChangeForm] = useState(false);

    const onChangeForm = () => {
        setIsChangeForm((prev) => !prev);
    };

    // tailwind에서 translate -100%를 주는 방법을 못찾아서 const로 빼서 주고있습니다.
    
    //회원 가입
    const signUpContainerStyle = isChangeForm
        ? {
              transform: `translateX(100%)`,
          }
        : {};
    // 로그인
    const signInContainerStyle = isChangeForm
        ? {
              transform: `translateX(100%)`,
          }
        : {};

    // 로그인 시
    const loginOverlayStyle = isChangeForm
        ? {
              transform: `translateX(-100%)`,
          }
        : {};

    // 회원가입 시
    const signUpOverlayStyle = isChangeForm
        ? {
              transform: `translateX(-100%)`,
          }
        : {};

    return (
        // Wrapper
        <div className="w-screen h-screen flex items-center justify-center  bg-primary-peanut">
            {/* container */}
            <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                {isChangeForm ? (
                    <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                        <div style={signUpContainerStyle} className="h-[898px] w-[712px]  ">
                            <SignUpForm />
                        </div>
                        {/* overlay: 버튼은 로그인 */}
                        {/* transform: translateX(-100%); opacity: 1; z-index: 2; */}
                        <div style={signUpOverlayStyle} className="h-[898px] w-[712px] rounded-l-3xl ">
                            <SignUpOverlay onChangeForm={onChangeForm} />
                        </div>
                    </div>
                ) : (
                    <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                        <div style={signInContainerStyle} className="h-[898px] w-[712px] rounded-r-3xl">
                            <SignInForm />
                        </div>
                        {/* overlay: 버튼은 회원가입 */}
                        {/* transform: translateX(-100%); opacity: 0; */}
                        <div style={loginOverlayStyle} className="h-[898px] w-[712px] bg-primary-cheese rounded-r-3xl">
                            <LoginOverlay onChangeForm={onChangeForm} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sign;
