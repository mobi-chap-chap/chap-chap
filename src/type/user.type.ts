import { Dispatch, SetStateAction } from "react"
import { RecipeDetail } from "./recipe.type"

// user type
export type User = {
  nickname: string
  userId: string
  password: string
  checkPw: string
  data: {
    profileImage: string
    // 유저가 스크랩한 레시피 목록
    scrapRecipe: {
      scrapId:string
      recipes: RecipeDetail[]
      total_count: number
    }
  }
  status: number
}

//dialog
export type MyDialogProps = {
  isDialogOpen: boolean
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}
