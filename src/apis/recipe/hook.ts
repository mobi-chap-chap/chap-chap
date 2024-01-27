import { useInfiniteQuery, useQuery } from "react-query";

import { getRecipe } from "./api";
import { QUERY_KEY } from "../../consts/query-key";

// export function useGetDetailRecipe(RCP_NM: string) {
//   return useQuery(recipeOption.detailRecipe(RCP_NM));
// }

export function useGetRecipeInfinity() {
  const {
    data: recipeData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
    queryFn: ({ pageParam = { startIdx: 1, endIdx: 50 } }) =>
      getRecipe(pageParam),
    getNextPageParam: (lastPage, totalPages) => {
      let startIdx = totalPages.length * 50 + 1;
      let endIdx = (totalPages.length + 1) * 50;

      // 전체 갯수보다 현재 검색중인 수가 클경우
      // 전체 갯수로 변경

      // ex 1136 , 1101 ~ 1136,
      // console.log(totalPages);
      if (lastPage.COOKRCP01.total_count < endIdx) {
        endIdx = lastPage.COOKRCP01.total_count;
      }

      // 더이상 패칭을 막기 위해 null을 반환
      // ex 1136, 1101, 1151 => null
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
