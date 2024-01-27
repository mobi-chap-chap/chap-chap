import SignInForm from './components/form/in-form';
import SignUpForm from './components/form/up-form';
import { useState } from 'react';
import SignUpOverlay from './components/overlay/sign-up-overlay';
import LoginOverlay from './components/overlay/login-overlay';

const Sign = () => {
    const [showSignUpForm, setShowSignUpForm] = useState<boolean>(true);

    const onChangeForm = (): void => {
        setShowSignUpForm((prev: boolean) => !prev);
    };

    // 회원가입 overlay
    const signUpOverlayStyle: React.CSSProperties = showSignUpForm
        ? {
              transform: `translateX(-100%)`,
              transition: `all 0.5s`,
              opacity: 1,
          }
        : {
              opacity: 0,
          };

    // 로그인 overlay
    const loginOverlayStyle = showSignUpForm
        ? {
              transform: `translateX(0%)`,
              opacity: 0,
          }
        : {
              transition: `all 0.5s`,
              opacity: 1,
          };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-primary-peanut">
            <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                {showSignUpForm ? (
                    <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                        <div className="h-[898px] w-[712px] translate-x-full">
                            <SignUpForm setShowSignUpForm={setShowSignUpForm} />
                        </div>
                        <div style={signUpOverlayStyle} className="h-[898px] w-[712px] rounded-l-3xl ">
                            <SignUpOverlay onChangeForm={onChangeForm} />
                        </div>
                    </div>
                ) : (
                    <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                        <div className="h-[898px] w-[712px] rounded-r-3xl ">
                            <SignInForm />
                        </div>
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
