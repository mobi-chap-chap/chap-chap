type SelectProps = {
  label: string;
  options: string[];
};

export const SelectDropdown: React.FC<SelectProps> = ({ label, options }) => {
  return (
    <select className="w-[105px] h-[30px] bg-white text-black border cursor-pointer border-primary-cheese font-thin mx-[6px] rounded-md px-[6px] text-[14px] ">
      <option>{label}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};
