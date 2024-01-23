import { FC } from 'react';
import { InputTypes } from './type/input.type';

const ChapInput: FC<InputTypes> = ({ label, error, access, ...props }) => {
    return (
        <>
            <div className="w-[558px] flex justify-between items-center">
                <label className="text-[18px] mr-[14px] text-primary-cheese">{label}</label>
                <input
                    className="bg-primary-peanut shadow-innerPeanut w-[414px] h-[48px] rounded-[14px] focus:outline-none pl-3 text-primary-chocolate"
                    {...props}
                />
            </div>
            <p className="w-full ml-[144px] pl-[30px] py-[15px] text-error text-[14px]">{error}</p>
            <p className="w-full ml-[144px] pl-[30px] py-[15px] text-access text-[14px]">{access}</p>
        </>
    );
};
export default ChapInput;
