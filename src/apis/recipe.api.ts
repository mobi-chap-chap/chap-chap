import { END_POINT } from "../consts/end-point";
import { axiosInstance, axiosRecipeInstance } from "./core";
import { Recipe } from "./type/recipe.type";

//Promise<> 는 아래서 추론이 되기때문에 생략가능

/**
 * @recipeData : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */
export const getRecipe = async ({ ...recipeData }: Recipe) => {
  const res = await axiosRecipeInstance.get(
    END_POINT.RECIPE({ ...recipeData })
  );
  console.log(res.data);
  return res.data;
};

export const getDetailRecipe = async (param: number | undefined) => {
  const res = await axiosInstance.get(`/data/detail/recipeNum=${param}`);
  return res.data;
};
