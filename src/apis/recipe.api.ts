import { DETAIL_END_POINT, END_POINT } from "../consts/end-point";
import { axiosRecipeInstance } from "./core";
import { Recipe, keyID, serviceID } from "./type/recipe.type";

//Promise<> 는 아래서 추론이 되기때문에 생략가능

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

// export const getDetailRecipe = async (param: number | undefined) => {
//   const res = await axiosRecipeInstance.get(
//     `/sample/COOKRCP01/xml/1/5/RCP_NM=${param}`
//   );
//   return res.data;
// };
