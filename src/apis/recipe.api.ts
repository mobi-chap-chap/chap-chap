import { END_POINT } from "../consts/end-point";
import { axiosRecipeInstance } from "./core";
import { Recipe } from "./type/recipe.type";

//Promise<> 는 아래서 추론이 되기때문에 생략가능

/**
 * @props : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */
export const getRecipe = async ({ ...props }: Recipe) => {
    const res = await axiosRecipeInstance.get(END_POINT.RECIPE({ ...props }));
    console.log(res.data);
    return res.data;
};