import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../consts/query-key";
import { getRecipe } from "../../../apis/recipe.api";
import OneRecipe from "../../components/one-recipe";
import { keyID, serviceID } from "../../../apis/type/recipe.type";
import { FC } from "react";

const RecipeList: FC = () => {
  const { data: recipeList } = useQuery([QUERY_KEY.MORE_RECIPE_LIST], () =>
    getRecipe(recipeData)
  );

  const recipeData = {
    keyId: keyID, // 실제 값으로 대체
    serviceId: serviceID, // 실제 값으로 대체
    dataType: "json", // 실제 값으로 대체
    startIdx: "1", // 시작 인덱스 값
    endIdx: "52", // 종료 인덱스 값
  };

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
