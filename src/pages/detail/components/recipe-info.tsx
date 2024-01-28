import { FC } from "react"
import { OneRecipeIcon } from "../../../assets/icon"
import { RecipeDetail } from "../../../type/recipe.type"

const RecipeInfo: FC<RecipeDetail> = recipeData => {
  const { RCP_WAY2, RCP_NM, INFO_ENG, HASH_TAG, INFO_CAR, INFO_PRO, INFO_FAT, INFO_NA, RCP_PARTS_DTLS } = recipeData

  return (
    <div className="absolute left-[484px] top-[30px]">
      <div className="ml-[448px] flex flex-row">
        <img src={OneRecipeIcon.bookmarkLine} className="w-[30px]" />
        <img src={OneRecipeIcon.share} className="ml-[30px] w-[30px]" />
      </div>
      <div className="mt-[76px] flex flex-row place-items-center">
        <img src={OneRecipeIcon.dish} className="mx-[30px] w-[30px]" />
        <p className="text-[18px] text-primary-cheese">{RCP_WAY2}</p>
      </div>
      <h3 className="ml-[30px] mt-[14px] text-[24px] text-black">{RCP_NM}</h3>
      <div className="ml-[30px] mt-[20px] flex w-[507px] flex-row justify-between">
        <p className="text-primary-cheese">#{HASH_TAG}</p>
        <p className="text-gray-500">{INFO_ENG}kcal</p>
      </div>
      <div className="my-[20px] ml-[30px] flex w-[280px] flex-row justify-between text-[14px] text-gray-500">
        <p>탄수화물 {INFO_CAR}</p>
        <p>단백질 {INFO_PRO} </p>
        <p>지방 {INFO_FAT} </p>
        <p>나트륨 {INFO_NA} </p>
      </div>
      <div className="ml-[30px]">
        <p className="text-[14px] text-black">재료 정보</p>
        <p className="my-[26px] w-[380px] text-[14px] leading-6 text-black">{RCP_PARTS_DTLS}</p>
      </div>
    </div>
  )
}
export default RecipeInfo
