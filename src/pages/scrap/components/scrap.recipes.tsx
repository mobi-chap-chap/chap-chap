import { Grid } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { getRecipe } from "../../../apis/recipe.api";
import { QUERY_KEY } from "../../../consts/query-key";
import { keyID, serviceID } from "../../../apis/type/recipe.type";

const ScrapRecipe: FC = () => {
  //임시로 넣은 데이터 입니다!
  const { data: recipeList } = useQuery([QUERY_KEY.MORE_RECIPE_LIST], () =>
    getRecipe(recipeData)
  );
  const recipeData = {
    keyId: keyID, // 실제 값으로 대체
    serviceId: serviceID, // 실제 값으로 대체
    dataType: "json", // 실제 값으로 대체
    startIdx: "1", // 시작 인덱스 값
    endIdx: "12", // 종료 인덱스 값
  };

  const RecipeListContent = recipeList?.COOKRCP01?.row || [];
  console.log(RecipeListContent);
  return (
    <>
      <div className=" text-black w-full  px-[450px] py-[20px] ml-[13px] relative">
        <div>
          <div style={{ marginTop: 50 }}>
            <Grid
              container
              spacing={{ xs: 1, md: 2, lg: 3 }}
              style={{ paddingBottom: 20 }}
            >
              {RecipeListContent.map((list: any, index: number) => (
                <Grid style={{ margin: 10 }}>
                  {/* <OneImage src={list.Product.img_url} onClick={() => onToDetailPage(list.Product.idx)} /> */}
                  <img
                    src={list.ATT_FILE_NO_MAIN}
                    className="w-[240px] h-[240px] "
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScrapRecipe;
/*
해야하는거
이미지 컴포넌트 분리 
호버
<div className="w-[239px] h-[240px] transition delay-100  absolute  hover:bg-black opacity-40 rounded-t-lg" />

*/