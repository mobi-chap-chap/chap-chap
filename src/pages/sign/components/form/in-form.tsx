import FormHeader from './form-header';

const SignInForm: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl  bg-primary-peanut">
            <FormHeader />
            <form className="w-full flex flex-col space-y-10 items-center mt-24 mb-20">
                <input />
                <input />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default SignInForm;
