import { ChangeEvent, FC } from "react";
import { SelectProps } from "../../../type/main.type";

export const SelectDropdown: FC<SelectProps> = ({ label, options, ...props }) => {

  return (
    <select className="w-[105px] h-[30px] bg-white text-black border cursor-pointer border-primary-cheese font-thin mx-[6px] rounded-md px-[6px] text-[14px] "
    {...props}>
      <option>{label}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};
 