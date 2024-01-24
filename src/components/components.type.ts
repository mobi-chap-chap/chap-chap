import { ButtonHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";

export type ButtonTypes = {
  type: "button" | "submit";
  disabled?: boolean;
  variant: "cheese" | "peanut" | "noResults";
  size: "circle" | "rounded" | "square";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputTypes = {
  label: string;
  type: "text" | "password";
  error?: string;
  access?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type Slide = string;

export interface ChapCarouselProps {
  Slides: Slide[];
}
