import { FC } from "react"
import { ButtonTypes } from "../type/components.type"

const ChapButton: FC<ButtonTypes> = ({ children, type, variant, size, onClick, ...props }) => {
  const variantCSS = {
    cheese: "bg-primary-cheese text-primary-peanut shadow-dropCheese hover:shadow-innerCheese focus:shadow-innerCheese",
    peanut:
      "bg-primary-peanut shadow-dropPeanut hover:shadow-innerPeanut focus:shadow-innerPeanut text-primary-cheese disabled:shadow-innerPeanut ",
    noResults: "bg-primary-peanut hover:bg-primary-cheese text-primary-cheese hover:text-primary-peanut",
  }
  const sizeCSS = {
    circle: "w-20 h-20 rounded-full",
    rounded: "w-[274px] h-[80px] rounded-[29px] text-[28px]",
    square: "w-[238px] h-[60px] rounded-[8px] text-[16px] ",
  }

  return (
    <button
      type={type}
      {...props}
      className={`${variantCSS[variant]} ${sizeCSS[size]} transition duration-500 ease-in-out focus:outline-none`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default ChapButton
