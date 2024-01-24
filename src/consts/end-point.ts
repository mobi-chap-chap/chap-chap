import { Recipe } from "../apis/type/recipe.type";

export const END_POINT = {
    RECIPE : ({keyId, serviceId, dataType, startIdx, endIdx}:Recipe)=> 
    `/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`
}