import { FC, useState } from "react"
import UseNavigation from "../../hooks/use-navigation"
import { skipTitleView } from "../../utils/overflow-helper"
import { OneRecipeIcon } from "../../assets/icon"
import { OneRecipeProps } from "./one-recipe-type"

const OneRecipe: FC<OneRecipeProps> = ({ recipeImg, recipeType, recipeKal, recipeTitle }) => {
  const [isLikedScrap, setIsLikedScrap] = useState(false)

  //스크랩 저장
  const onScrapToggle = () => {
    setIsLikedScrap(prev => !prev)
    if (isLikedScrap === false) return alert("스크랩이 저장되었습니다 :)")
    if (isLikedScrap === true) return alert("스크랩이 취소되었습니다 :)")
  }

  const { goToDetailPage } = UseNavigation()

  const urlParams = new URLSearchParams(window.location.href)
  urlParams.append("RCP_NM", recipeTitle)

  // navigate : detail-recipe
  const onClickToDetailPage = (recipeTitle: string) => {
    goToDetailPage(recipeTitle)
    window.scrollTo({ top: 0 })
  }

  return (
    <div
      onClick={() => onClickToDetailPage(recipeTitle)}
      className="m-auto h-[382px]  w-[240px] cursor-pointer rounded-lg border border-solid border-primary-peanut"
    >
      <div className="absolute h-[240px] w-[239px] rounded-t-lg  opacity-40  transition delay-100 hover:bg-black"></div>
      <div>
        <img src={recipeImg} alt="Recipe Image" className="h-[240px] w-[239px] rounded-t-lg " />
      </div>

      <div className="my-[10px]  flex  flex-col">
        <div className="flex items-center justify-between px-[13px] pl-[15px] ">
          <div className="flex text-[14px] ">
            <div>{recipeType}</div>
            <div className="ml-[27px]">{recipeKal}kal</div>
          </div>

          <div>
            <img
              className="w-[30px]"
              src={isLikedScrap ? OneRecipeIcon.bookmarkFull : OneRecipeIcon.bookmarkLine}
              onClick={onScrapToggle}
            />
          </div>
        </div>

        <div className="mt-[65px] pl-[15px] text-[18px]">{skipTitleView(recipeTitle)}</div>
      </div>
    </div>
  )
}
export default OneRecipe
