import { ButtonHTMLAttributes } from "react";

export type ButtonTypes = {
  type: "button" | "submit";
  disabled?: boolean;
  variant: "cheese" | "peanut" | "noResults";
  size: "circle" | "rounded" | "square";
} & ButtonHTMLAttributes<HTMLButtonElement>;
