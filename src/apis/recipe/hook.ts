import { useInfiniteQuery, useQuery } from "react-query";
import { getDetailRecipe, getRecipe } from "./api";
import { QUERY_KEY } from "../../consts/query-key";

export function useGetRecipeInfinity() {
  const {
    data: recipeData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
    queryFn: ({ pageParam = { startIdx: 1, endIdx: 12 } }) =>
      getRecipe(pageParam),
    getNextPageParam: (lastPage, totalPages) => {
      let startIdx = totalPages.length * 12 + 1;
      let endIdx = (totalPages.length + 1) * 12;

      // const page = lastPage.COOKRCP01.total_count
      // if (totalPages === page) return false;
      // return page + 1;

      /* 
      (lastPage) => {
      const page = lastPage.page;
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
    
      */

      // 전체 갯수보다 현재 검색중인 수가 클경우
      // 전체 갯수로 변경
      if (lastPage.COOKRCP01.total_count < endIdx) {
        endIdx = lastPage.COOKRCP01.total_count;
      }
      if (startIdx > lastPage.COOKRCP01.total_count) {
        return null;
      }

      // 다음 startIdex, endIdx => pageParam

      // return null;
      return { startIdx, endIdx };
    },
  });
  return { recipeData, fetchNextPage, hasNextPage, isFetching };
}

export function useGetDetailRecipe({
  ...recipeKey
}: {
  startIdx: number;
  endIdx: number;
  RCP_NM: string;
}) {
  const { data: recipeDetail, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.DETAIL_RECIPE_DATA],
    queryFn: () => getDetailRecipe({ ...recipeKey }),
  });

  return { recipeDetail, isSuccess };
}
