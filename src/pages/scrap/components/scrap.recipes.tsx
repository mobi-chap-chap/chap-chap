import { Grid } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../consts/query-key";
import { UserApi } from "../../../apis/user.api";
// import { recipeData } from "../../../consts/recipe-data";
// import { getRecipe } from "../../../apis/recipe/api";

const ScrapRecipe: FC = () => {
  //임시로 넣은 데이터 입니다!
 
  // 이거 useInfinityQuery만들었던ㄴ거 처럼 훅함수하난 만드는게 낫지않을까욤
  // 스크랩된 레시피 목록 무한 스크롤로 보여주는 거죠 페이지네이션 안할거면?!? 그렇겟죠?!죠넹
  const { data: recipeList } = useQuery([QUERY_KEY.MORE_RECIPE_LIST], () =>
   
  UserApi.PostScrapRecipe()
  );
  const RecipeListContent = recipeList?.COOKRCP01?.row || [];
  return (
    <>
      <div className=" text-black w-full  px-[450px] ml-[13px] relative">
        <div>
          <div style={{ marginTop: 50 }}>
            <Grid
              container
              spacing={{ xs: 1, md: 2, lg: 3 }}
              style={{ paddingTop: 20, paddingBottom: 60, marginLeft: -20 }}
            >
              {RecipeListContent.map((list: any, index: number) => (
                <Grid style={{ margin: 10 }}>
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


//해야하는거
//이미지 컴포넌트 분리
//호버
