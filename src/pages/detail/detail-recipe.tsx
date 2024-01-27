import { useParams } from "react-router-dom";
import RecipeInfo from "./components/recipe-info";
import Steps from "./components/recipe-steps";
import { FC } from "react";
import { useGetDetailRecipe } from "../../hooks/use-recipe-query";
import { RecipeDetail } from "../../type/recipe.type";

const DetailRecipe: FC<RecipeDetail> = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();

  // navigate to 404 page
  if (!RCP_NM) return <div>잘못된 접근입니다.</div>;

  const { recipeDetail, isSuccess } = useGetDetailRecipe({
    startIdx: 1,
    endIdx: 12,
    RCP_NM: RCP_NM,
  });

  // loading page
  if (!isSuccess || !recipeDetail) return <div>로딩 중</div>;

  const detailInfo = recipeDetail.COOKRCP01.row.filter(
    (recipe) => recipe.RCP_NM === RCP_NM
  )[0];

  return (
    <div className="w-[1024px] h-[100%]  mx-[448px] top-[160px] relative">
      <div className="h-[515px]  flex flex-row">
        <div className="w-[484px] h-[484px] bg-primary-peanut overflow-hidden flex place-content-center place-items-center">
          <img
            className="w-[484px] h-[484px]"
            src={detailInfo.ATT_FILE_NO_MK}
          />
        </div>
        <RecipeInfo {...detailInfo} />
      </div>
      <div className="w-[1024px] h-[1px]  bg-primary-cheese" />
      <Steps {...detailInfo} />
    </div>
  );
};
export default DetailRecipe;
