import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../consts/query-key";
import { getRecipe } from "../../../apis/recipe.api";
import OneRecipe from "../../components/one-recipe";
import {
  Recipe,
  RecipeInfo,
  keyID,
  serviceID,
} from "../../../apis/type/recipe.type";
import { FC } from "react";

const RecipeList: FC = () => {
  const recipeData: Recipe = {
    keyId: keyID, // 실제 값으로 대체
    serviceId: serviceID, // 실제 값으로 대체
    dataType: "json", // 실제 값으로 대체
    startIdx: "1", // 시작 인덱스 값
    endIdx: "52", // 종료 인덱스 값
  };

  const { data: recipeList } = useQuery([QUERY_KEY.MORE_RECIPE_LIST], () =>
    getRecipe(recipeData)
  );

  const RecipeListContent = recipeList && recipeList.COOKRCP01.row;
  console.log("recipeList", recipeList);

  return (
    RecipeListContent && (
      <div className=" text-black w-full  px-[450px] py-[50px] ml-[13px] relative">
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 3 }}
          style={{ paddingBottom: 20 }}
        >
          {RecipeListContent.map((recipe: RecipeInfo, index: number) => (
            <Grid
              xs={6}
              md={4}
              lg={3}
              style={{ paddingBottom: 40 }}
              key={index + 1}
            >
              <OneRecipe
                recipeData={recipeData}
                recipeNum={recipe.RCP_SEQ}
                recipeName={recipe.RCP_NM}
                recipeImg={recipe.ATT_FILE_NO_MAIN}
                recipeType={recipe.RCP_PAT2}
                recipeKal={recipe.INFO_ENG}
                recipeTitle={recipe.RCP_NM}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};

export default RecipeList;
