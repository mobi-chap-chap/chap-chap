import { Dispatch, SetStateAction } from "react"

// user type
export type User = {
  nickname: string
  userId: string
  password: string
  checkPw: string
  data: {
    scrapId: string
    profileImage: string
    scrap?: boolean
  }
  status: number
}

//dialog
export type MyDialogProps = {
  isDialogOpen: boolean
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}
