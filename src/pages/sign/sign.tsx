import SignInForm from './components/form/in-form';
import SignUpForm from './components/form/up-form';
import { useState } from 'react';
import SignUpOverlay from './components/overlay/sign-up-overlay';
import LoginOverlay from './components/overlay/login-overlay';

const Sign = () => {
    // 랜더링을 다시해버리는 거기 때문에 애니메이션이 잘안먹힌다...
    const [showSignUpForm, setShowSignUpForm] = useState(true);

    const onChangeForm = () => {
        setShowSignUpForm((prev) => !prev);
    };

    // tailwind에서 translate -100%를 주는 방법을 못찾아서 const로 빼서 주고있습니다.

    //회원 가입
    const signUpContainerStyle = showSignUpForm
        ? {
              transform: `translateX(100%)`,
              transition: `all 0.5s`,
              opacity: 1,
          }
        : {
              //   transform: `translateX(0%)`,
              transition: `all 0.5s`,
              opacity: 0,
          };
    // 로그인
    const signInContainerStyle = showSignUpForm
        ? {
              transform: `translateX(100%)`,
              transition: `all 0.5s`,
              opacity: 0,
          }
        : {
              //   transform: `translateX(0%)`,
              transition: `all 0.5s`,
              opacity: 1,
          };

    // 로그인 시
    const loginOverlayStyle = showSignUpForm
        ? {
              transform: `translateX(0%)`,
              transition: `all 0.5s`,
              opacity: 0,
          }
        : {
              //   transform: `translateX(100%)`,
              transition: `all 0.5s`,
              opacity: 1,
          };

    // 회원가입 시
    const signUpOverlayStyle = showSignUpForm
        ? {
              transform: `translateX(-100%)`,
              transition: `all 0.5s`,
              opacity: 1,
          }
        : {
              //   transform: `translateX(100%)`,
              transition: `all 0.5s`,
              opacity: 0,
          };

    return (
        // Wrapper
        <div className="w-screen h-screen flex items-center justify-center bg-primary-peanut">
            {/* container */}
            <div className="flex w-[1424px] h-[898px] shadow-container rounded-3xl">
                {showSignUpForm ? (
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
