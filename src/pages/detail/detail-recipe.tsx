import { useParams } from "react-router-dom";
import RecipeInfo from "./components/recipe-info";
import Steps from "./components/recipe-steps";
import { FC } from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../consts/query-key";

import { Recipe, keyID, serviceID } from "../../apis/type/recipe.type";
import { getDetailRecipe } from "../../apis/recipe/api";

const DetailRecipe: FC = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();

  console.log("RCP_NM", RCP_NM);

  const recipeData: Recipe = {
    keyId: keyID,
    serviceId: serviceID,
    dataType: "json",
    startIdx: "1",
    endIdx: "52",
    RCP_NM: RCP_NM ?? "",
  };

  const { data: detailRecipe } = useQuery({
    queryKey: [QUERY_KEY.DETAIL_RECIPE_DATA],
    queryFn: () => getDetailRecipe(recipeData),
  });

  detailRecipe && console.log("detailRecipe", detailRecipe);

  return (
    detailRecipe && (
      <div className="w-[1024px] mx-[448px] relative top-[160px]">
        <div className="h-[515px] border border-solid border-b-primary-cheese flex flex-row">
          {/* carousel로 대체 */}
          <div className="w-[484px] h-[484px] bg-primary-peanut text-black text-center pt-[22%]">
            carousel 위치
          </div>
          <RecipeInfo />
        </div>
        <Steps />
      </div>
    )
  );
};
export default DetailRecipe;
