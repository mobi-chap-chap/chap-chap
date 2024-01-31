import { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { useGetRecipeInfinity } from "../../../hooks/use-recipe-query";
import OneRecipe from "../../components/one-recipe";
import Lottie from "react-lottie";
import animationData from '../../../animations/Animation - 1706618442042 (1).json'

const RecipeList: FC = () => {
  const { recipeData, fetchNextPage, isSuccess } = useGetRecipeInfinity();

  const RecipeListContent = recipeData?.pages
    .map((list) => list.COOKRCP01.row)
    .flat();

  // 스크롤 최하단 시 fetchNextPage실행
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  if (!isSuccess || !recipeData) return <Lottie options={defaultOptions} height={260} width={260} style={{marginBlock : '70px'}} />

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
    </>
  );
};

export default RecipeList;
