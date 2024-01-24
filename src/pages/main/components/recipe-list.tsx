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

/*

// Queries
  const { data: postList, fetchNextPage } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY.POST_LIST],
    queryFn: ({ pageParam = 1 }) => Api.fetchPostList(pageParam),
    getNextPageParam: (lastPage) => {
      const page = lastPage.page;
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
  });

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
5 기준

  <div className="w-[240px] h-[382px]  m-auto cursor-pointer rounded-lg border border-solid border-primary-peanut">
                <div>
                 
                  <div>
                    <img
                      src={item.ATT_FILE_NO_MAIN}
                      className="w-[239px] h-[240px] transition-transform transform bg-black hover:bg-opacity-30 rounded-t-lg"
                    />
                  </div>
                </div>

                <div className="flex  flex-col  my-[10px]">
                  <div className="flex justify-between items-center px-[13px] ">
                    <div className="flex">
                      <div>{item.RCP_PAT2}</div>
                      <div className="ml-[27px]">
                        {Math.floor(item.INFO_ENG)}kal
                      </div>
                    </div>

                    <div>
                      <img
                        className="w-[30px]"
                        src={scrapLineIcon}
                        onClick={onClickScrapBtn}
                      />
                    </div>
                  </div>

                  <div className="pl-[13px] mt-[65px]">{item.RCP_NM}</div>
                </div>
              </div>
*/
