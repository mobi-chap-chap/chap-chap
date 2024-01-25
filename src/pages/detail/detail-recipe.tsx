import { useParams, useSearchParams } from "react-router-dom";
import RecipeInfo from "./components/recipe-info";
import Steps from "./components/recipe-steps";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../consts/query-key";
import { getDetailRecipe } from "../../apis/recipe.api";
import { Recipe, keyID, serviceID } from "../../apis/type/recipe.type";

const DetailRecipe: FC = () => {
  // id 값과 같은 데이터를 recoil에 저장한 use데이터목록에서 가져오기
  //const [searchParams, setSearchParams] = useSearchParams();
  //const recipeName = searchParams.get("RCP_NM");

  //console.log("recipeName", recipeName);

  // 제네릭으로 타입을 지정하여 RCP_NM이 undefined일 수 있음을 명시
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();

  console.log("RCP_NM", RCP_NM);
  // null 체크 후 값이 있다면 사용하고, 없다면 기본값을 지정
  // const RCP_NM = recipeName || "";

  const recipeData: Recipe = {
    keyId: keyID,
    serviceId: serviceID,
    dataType: "json",
    startIdx: "1",
    endIdx: "5",
    RCP_NM: RCP_NM ?? "",
  };

  // const updatedRecipeData: Recipe = {
  //   ...recipeData,
  //   RCP_NM: Number(dataId),
  // };

  // const { data: detailRecipe, refetch } = useQuery({
  //   queryKey: [QUERY_KEY.DETAIL_RECIPE_DATA],
  //   queryFn: () => getDetailRecipe(dataId ? +dataId : undefined),
  // });

  console.log("debugging 01", recipeData);

  const { data: detailRecipe, refetch } = useQuery({
    queryKey: [QUERY_KEY.DETAIL_RECIPE_DATA],
    queryFn: () => getDetailRecipe(recipeData),
  });

  detailRecipe && console.log("detailRecipe", detailRecipe);
  console.log("debugging 02", detailRecipe); // error(파일타입 값이 누락 혹은 유효하지 않습니다. 요청인자 중 TYPE을 확인하십시오)

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
