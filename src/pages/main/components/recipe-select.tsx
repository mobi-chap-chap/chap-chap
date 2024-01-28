import { FC } from "react"
import { SelectProps } from "../../../type/main.type"

export const SelectDropdown: FC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <select
      className="font-thin mx-[6px] h-[30px] w-[105px] cursor-pointer rounded-md border border-primary-cheese bg-white px-[6px] text-[14px] text-black "
      {...props}
    >
      <option>{label}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  )
}
