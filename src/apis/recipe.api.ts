import { DETAIL_END_POINT, END_POINT, SEARCH_END_POINT } from "../consts/end-point";
import { axiosRecipeInstance } from "./core";
import { Info } from "../type/recipe.type";

/**
 * @recipeData : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */

export const RecipeApi = {
  
  async getRecipe({
    ...recipeData
  }: {
    startIdx: number;
    endIdx: number;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      END_POINT.RECIPE({ ...recipeData })
    );
    return res.data;
  },
  

  async getSearchRecipe ({
    ...recipeData
  } : {
    startIdx: number;
    endIdx: number;
    RCP_NM: string;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      SEARCH_END_POINT.RECIPE({ ...recipeData })
    )
    return res.data
  },


  async getDetailRecipe({
    ...recipeData
  }: {
    startIdx: number;
    endIdx: number;
    RCP_NM: string;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      DETAIL_END_POINT.RECIPE({ ...recipeData })
    );
    return res.data;
  }
};









