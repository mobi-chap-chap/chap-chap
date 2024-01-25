import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../consts/query-key";
import { getRecipe } from "../../../apis/recipe.api";
import OneRecipe from "../../components/one-recipe";
import { FC } from "react";
import { recipeData } from "../../../consts/recipe-data";

const RecipeList: FC = () => {
  const { data: recipeList } = useQuery([QUERY_KEY.MORE_RECIPE_LIST], () =>
    getRecipe(recipeData)
  );
  // const { data: recipeLists } = useInfiniteQuery(
  //   [QUERY_KEY.MORE_RECIPE_LIST],
  //   () => getRecipe(recipeData)
  // );

  // const {
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  //   isFetchingNextPage,
  //   isFetchingPreviousPage,
  //   ...result
  // } = useInfiniteQuery({
  //   queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
  //   queryFn: ({ pageParam = "1" }) =>
  //     getRecipe({ startIdx: pageParam, endIdx: "50" }),
  //   //레시피는 넘버가 아니다
  //   initialPageParam: { startIdx: "1", endIdx: "50" },
  //   getNextPageParam: (lastPage) => lastPage.nextCursor,
  //   getPreviousPageParam: (firstPage) => firstPage.prevCursor,
  // });

  // const { data: recipeLists, fetchNextPage } = useInfiniteQuery<recipeInfo, Error>({
  //   queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
  //   queryFn: ({ pageParam = 1 }) => getRecipe(recipeData, pageParam),
  // });

  const RecipeListContent = recipeList && recipeList.COOKRCP01.row;
  return (
    RecipeListContent && (
      <div className=" text-black w-full  px-[450px] py-[50px] ml-[13px] relative">
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 3 }}
          style={{ paddingBottom: 20 }}
        >
          {RecipeListContent.map((item: any, index: any) => (
            <Grid
              xs={6}
              md={4}
              lg={3}
              style={{ paddingBottom: 40 }}
              key={index}
            >
              <OneRecipe
                recipeImg={item.ATT_FILE_NO_MAIN}
                recipeType={item.RCP_PAT2}
                recipeKal={item.INFO_ENG}
                recipeTitle={item.RCP_NM}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};

export default RecipeList;
