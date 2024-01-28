import { DETAIL_END_POINT, END_POINT, SEARCH_END_POINT } from "../consts/end-point";
import { axiosRecipeInstance } from "./core";
import { Info } from "../type/recipe.type";

/**
 * @recipeData : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */

export const getRecipe = async ({
  ...recipeData
}: {
  startIdx: number;
  endIdx: number;
}) => {
  const res = await axiosRecipeInstance.get<Info>(
    END_POINT.RECIPE({ ...recipeData })
  );

  return res.data;
};

export const getDetailRecipe = async ({
  ...recipeData
}: {
  startIdx: number;
  endIdx: number;
  RCP_NM: string;
}) => {
  const res = await axiosRecipeInstance.get<Info>(
    DETAIL_END_POINT.RECIPE({ ...recipeData })
  );
  return res.data;
};


export const getSearchRecipe = async ({
  ...recipeData
} : {
  startIdx: number;
  endIdx: number;
  RCP_NM: string;
  searchValue: string;
}) => {
  const res = await axiosRecipeInstance.get<Info>(
    SEARCH_END_POINT.RECIPE({ ...recipeData })
  )
  console.log(res.data)
  res.data
}


/**
 * const getSearchProduct = async (category, keyword, pageParam) => {
    const res = await axiosInstance().get(PATH + `/search?category=${category}&keyword=${keyword}&page=${pageParam}`);
    return res.data;
};
 */