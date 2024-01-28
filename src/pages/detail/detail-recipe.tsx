import { useParams } from "react-router-dom"
import RecipeInfo from "./components/recipe-info"
import Steps from "./components/recipe-steps"
import { FC } from "react"
import { useGetDetailRecipe } from "../../hooks/use-recipe-query"
import { RecipeDetail } from "../../type/recipe.type"

const DetailRecipe: FC<RecipeDetail> = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>()

  // navigate to 404 page
  if (!RCP_NM) return <div>잘못된 접근입니다.</div>

  const { recipeDetail, isSuccess } = useGetDetailRecipe({
    startIdx: 1,
    endIdx: 12,
    RCP_NM: RCP_NM,
  })

  // loading page
  if (!isSuccess || !recipeDetail) return <div>로딩 중</div>

  const detailInfo = recipeDetail.COOKRCP01.row.filter(recipe => recipe.RCP_NM === RCP_NM)[0]

  return (
    <div className="relative top-[160px]  mx-[448px] h-[100%] w-[1024px]">
      <div className="flex  h-[515px] flex-row">
        <div className="flex h-[484px] w-[484px] place-content-center place-items-center overflow-hidden bg-primary-peanut">
          <img className="h-[484px] w-[484px]" src={detailInfo.ATT_FILE_NO_MK} />
        </div>
        <RecipeInfo {...detailInfo} />
      </div>
      <div className="h-[1px] w-[1024px]  bg-primary-cheese" />
      <Steps {...detailInfo} />
    </div>
  )
}
export default DetailRecipe
