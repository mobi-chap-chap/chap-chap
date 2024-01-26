import { DETAIL_END_POINT, END_POINT } from "../../consts/end-point";
import { axiosRecipeInstance } from "../core";
import { Recipe } from "./recipe.type";

/**
 * @recipeData : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */
export const getRecipe = async ({ ...recipeData }: Recipe) => {
  const res = await axiosRecipeInstance.get(
    END_POINT.RECIPE({ ...recipeData })
  );
  return res.data;
};

export const getDetailRecipe = async ({ ...recipeData }: Recipe) => {
  const res = await axiosRecipeInstance.get(
    DETAIL_END_POINT.RECIPE({ ...recipeData })
  );
  return res.data;
};
