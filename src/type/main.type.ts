import { HTMLAttributes } from "react";

//recipe-select.tsx type
export type SelectProps = {
  label: string;
  options: string[];
} & HTMLAttributes<HTMLSelectElement>;
