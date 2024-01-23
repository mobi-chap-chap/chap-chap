import FormHeader from './form-header';

const SignUpForm: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-l-3xl">
            <FormHeader />
            <form className="w-full flex flex-col space-y-10 items-center mt-24 mb-20">
                <input />
                <input />
                <input />
                <input />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default SignUpForm;
