import { DETAIL_END_POINT, END_POINT } from "../../consts/end-point";
import { axiosRecipeInstance } from "../core";
import { Info, Recipe, RecipeInfo } from "../type/recipe.type";

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
  console.log("url", recipeData);

  const res = await axiosRecipeInstance.get<Info>(
    END_POINT.RECIPE({ ...recipeData })
  );
  return res.data;
};
//
