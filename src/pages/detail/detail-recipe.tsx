import { useParams } from "react-router-dom";
import RecipeInfo from "./components/recipe-info";
import Steps from "./components/recipe-steps";
import { useGetDetailRecipe } from "../../hooks/use-recipe-query";
import Lottie from "react-lottie";
import animationData from '../../animations/Animation - 1706618442042 (1).json'

const DetailRecipe = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();

  // navigate to 404 page
  if (!RCP_NM) return <div>잘못된 접근입니다.</div>

  const { recipeDetail, isLoading } = useGetDetailRecipe({
    startIdx: 1,
    endIdx: 12,
    RCP_NM: RCP_NM,
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // loading page
  // assertion -> 원래쓰면안됨..
  const detailInfo = recipeDetail!.COOKRCP01.row.filter(
    (recipe) => recipe.RCP_NM === RCP_NM
    )[0];
    
    if (!isLoading) return <Lottie options={defaultOptions} height={260} width={260} style={{marginBlock : '346px'}} />
  

  return (
    <div className="w-[1024px] h-[100%] mx-[448px] top-[160px] relative pb-[100px]">
      <div className="h-[515px]  flex flex-row">
        <div className="w-[484px] h-[484px] bg-primary-peanut overflow-hidden flex place-content-center place-items-center">
          <img
            className="w-[484px] h-[484px]"
            src={detailInfo?.ATT_FILE_NO_MK}
          />
        </div>
        <RecipeInfo {...detailInfo} />
      </div>
      <div className="h-[1px] w-[1024px]  bg-primary-cheese" />
      <Steps {...detailInfo} />
    </div>
  )
}
export default DetailRecipe
