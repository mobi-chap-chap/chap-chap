import { FC, useEffect } from "react";

import { useGetRecipeInfinity } from "../../../apis/recipe/hook";
import { Grid } from "@mui/material";
import OneRecipe from "../../components/one-recipe";
import { RecipeInfo } from "../../../apis/type/recipe.type";

const RecipeList: FC = () => {
  const { recipeData, fetchNextPage, hasNextPage } = useGetRecipeInfinity();
  useEffect(() => {
    console.log(recipeData?.pages.map((list) => list.COOKRCP01.row).flat());
  }, [recipeData]);
  // const RecipeListContent = recipeList && recipeList.COOKRCP01.row;
  const RecipeListContent = recipeData?.pages
    .map((list) => list.COOKRCP01.row)
    .flat();
  /*힌트..
  map 변수명을 안써도 된다 : 
   */
  return (
    <>
      <div className=" text-black w-full  px-[450px] py-[50px] ml-[13px] relative">
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 3 }}
          style={{ paddingBottom: 20 }}
        >
          {RecipeListContent &&
            RecipeListContent.map((recipe, index) => (
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
      <button
        className="h-[300px] w-[300px] text-black"
        onClick={() => fetchNextPage()}
      >
        click me!!
      </button>
    </>
  );
};

export default RecipeList;
