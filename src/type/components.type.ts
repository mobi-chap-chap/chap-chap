import { ButtonHTMLAttributes } from "react"
import { InputHTMLAttributes } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export type ButtonTypes = {
  type: "button" | "submit"
  disabled?: boolean
  variant: "cheese" | "peanut" | "noResults"
  size: "circle" | "rounded" | "square"
} & ButtonHTMLAttributes<HTMLButtonElement>

export type InputTypes<T extends FieldValues> = {
  label: string
  type: string
  id: Path<T>
  error?: string
  access?: string
  register: UseFormRegister<T>
} & InputHTMLAttributes<HTMLInputElement>

export type Slide = string

export type ChapCarouselProps = {
  Slides: Slide[]
}
