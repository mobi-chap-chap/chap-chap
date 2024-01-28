import { DETAIL_END_POINT, END_POINT } from "../consts/end-point";
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
  RCP_PAT2?:string
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
