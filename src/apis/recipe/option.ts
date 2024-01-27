import { infiniteQueryOptions } from "@tanstack/react-query";
import { getRecipe } from "./api";

export const recipeOption = {
  default: ["recipe"] as const,

  // detailRecipe: (RCP_NM: string) =>
  //   queryOptions({
  //     queryKey: [...recipeOption.default, RCP_NM],
  //     queryFn: () => getDetailRecipe({ RCP_NM }),
  //   }),

  getRecipe: () =>
    infiniteQueryOptions({
      queryKey: [...recipeOption.default],
      queryFn: ({ pageParam }) => getRecipe(pageParam),
      initialPageParam: { startIdx: 1, endIdx: 50 },
      getNextPageParam: (lastPage) => {
        console.log(lastPage);
        return null;
      },
    }),
};
