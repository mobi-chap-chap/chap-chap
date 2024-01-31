import React, { ReactEventHandler } from "react"

export type ShowProps = {
  setShowSignUpForm: React.Dispatch<React.SetStateAction<boolean>>
}

export type OverlayProps = {
  onChangeForm: ReactEventHandler
}

export type SignUpField = "nickname" | "userId" | "password" | "checkPw"
export type SignInField = "userId" | "password"


export type SignInDataType = {
  userId: string;
  password: string;
  token: string;
  info: {
    profileUrl: string;
  };
}