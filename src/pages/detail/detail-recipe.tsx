import { useParams } from "react-router-dom";
import RecipeInfo from "./components/recipe-info";
import Steps from "./components/recipe-steps";
import { FC } from "react";
import { useGetDetailRecipe } from "../../apis/recipe/hook";
import { RecipeDetail } from "../../apis/type/recipe.type";

const DetailRecipe: FC<RecipeDetail> = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();
  // console.log("RCP_NM", RCP_NM);

  if (!RCP_NM) throw new Error("RCP_NM is Empty");

  const { recipeDetail, isSuccess } = useGetDetailRecipe({
    startIdx: 1,
    endIdx: 12,
    RCP_NM: RCP_NM,
  });

  // navigate to 404 page
  if (!isSuccess || !recipeDetail) return <div>잘못된 접근입니다.</div>;

  const detailInfo = recipeDetail.COOKRCP01.row.filter(
    (recipe) => recipe.RCP_NM === RCP_NM
  )[0];

  return (
    <div className="w-[1024px] mx-[448px] relative top-[160px]">
      <div className="h-[515px] border border-solid border-b-primary-cheese flex flex-row">
        {/* carousel로 대체 */}
        <div className="w-[484px] h-[484px] bg-primary-peanut text-black text-center pt-[22%]">
          carousel 위치
        </div>
        <RecipeInfo {...detailInfo} />
      </div>
      <Steps />
    </div>
  );
};
export default DetailRecipe;
