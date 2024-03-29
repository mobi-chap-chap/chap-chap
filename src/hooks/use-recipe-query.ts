import { useInfiniteQuery, useQuery } from "react-query";
import { getDetailRecipe, getRecipe, getSearchRecipe } from "../apis/recipe.api";
import { QUERY_KEY } from "../consts/query-key";

/**
 * @function useGetRecipeInfinity 는 recipe data를 가져와 무한 스크롤을 구현해주는 hook 함수
 * @param {recipeData} : 매개변수로 받은 데이터들을 스프레드 형태로 보관, api 주소에 저장
 * @param {fetchNextPage} : useInfiniteQuery의 options 중 하나
 * @return {recipeData, fetchNextPage}
 **/

export function useGetRecipeInfinity() {
  const {
    data: recipeData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_RECIPE_LIST],
    queryFn: ({ pageParam = { startIdx: 1, endIdx: 12 } }) =>
      getRecipe(pageParam),
    getNextPageParam: (lastPage, totalPages) => {
      const startIdx = totalPages.length * 12 + 1;
      let endIdx = (totalPages.length + 1) * 12;

      if (lastPage.COOKRCP01.total_count < endIdx) {
        endIdx = lastPage.COOKRCP01.total_count;
      }
      if (startIdx > lastPage.COOKRCP01.total_count) {
        return null;
      }
      return { startIdx, endIdx};
    },
  });
  return { recipeData, fetchNextPage, hasNextPage, isFetching, isSuccess };
}

/**
 * @function useGetDetailRecipe 는 특정 레시피의 상세 정보를 가져오는 함수
 * @param {...recipeKey} 매개변수로 받은 데이터들을 스프레드 형태로 보관, api 주소에 저장
 * @returns {recipeDetail, isSuccess}
 */
export function useGetDetailRecipe({
  ...recipeKey
}: {
  startIdx: number;
  endIdx: number;
  RCP_NM: string;
}) {
  const { data: recipeDetail, isLoading } = useQuery({
    queryKey: [QUERY_KEY.DETAIL_RECIPE_DATA],
    queryFn: () => getDetailRecipe({ ...recipeKey }),
  });

  return { recipeDetail, isLoading };
}

/**
 * @function useGetSearchInfinity 는 recipe data를 가져와 무한 스크롤을 구현해주며 검색어를 함께 전달하는 hook함수
 * @param searchValue : 검색어. 검색어를 필터링하기 위해서 사용됨
 * @param queryKey : 데이터를 캐싱하고 무한 스크롤을 통해 새로운 페이지를 불러올 때 사용
 * @param {recipeData} : 매개변수로 받은 데이터들을 스프레드 형태로 보관, api 주소에 저장
 * @param {fetchNextPage} : useInfiniteQuery의 options 중 하나
 * @return { recipeData, fetchNextPage, hasNextPage, isFetching, isSuccess }
 **/


export function useGetSearchInfinity(searchValue:string) {
  const {
    data: recipeData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_RECIPE_LIST, searchValue],
    queryFn: ({ pageParam = { startIdx: 1, endIdx: 12 }}) =>
      getSearchRecipe(pageParam),
    getNextPageParam: (lastPage, totalPages) => {
      const startIdx = totalPages.length * 12 + 1;
      let endIdx = (totalPages.length + 1) * 12;

      if (lastPage.COOKRCP01.total_count < endIdx) {
        endIdx = lastPage.COOKRCP01.total_count;
      }
      if (startIdx > lastPage.COOKRCP01.total_count) {
        return null;
      }
      return { startIdx, endIdx, searchValue };
    },
  });
  return { recipeData, fetchNextPage, hasNextPage, isFetching, isSuccess };
}