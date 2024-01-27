import { ChangeEvent, useState } from "react";

type InputValue = Record<string, string>;

const useInputs = (initialValue: InputValue) => {
  const [value, setValue] = useState<InputValue>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return [value, onChange, setValue] as const;
};

export default useInputs;
