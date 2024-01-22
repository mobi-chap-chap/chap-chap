import { InputHTMLAttributes } from "react";

export type InputTypes = {
  label: string;
  type: "text" | "password";
  error?: string;
  access?: string;
} & InputHTMLAttributes<HTMLInputElement>;
