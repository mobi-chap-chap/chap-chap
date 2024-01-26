import { Grid } from "@mui/material";
import { QUERY_KEY } from "../../../consts/query-key";
import { getRecipe } from "../../../apis/recipe/recipe.api";
import OneRecipe from "../../components/one-recipe";
import { RecipeInfo } from "../../../apis/recipe/recipe.type";
import { FC, useEffect } from "react";
import { useGetRecipe } from "../../../apis/recipe/recipe-api-hook";
import { infiniteQueryOptions } from "@tanstack/react-query";

const RecipeList: FC = () => {

  infiniteQueryOptions({ {
    queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
    queryFn: ({ pageParam = { startIdx: "1", endIdx: "10" } }) =>
      getRecipe(pageParam),
    getNextPageParam: (lastPage) => {},
  }})

  const { data, fetchNextPage } = useGetRecipe();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
