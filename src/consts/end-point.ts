import { Recipe } from "../apis/type/recipe.type";

export const END_POINT = {
  RECIPE: ({ keyId, serviceId, dataType, startIdx, endIdx }: Recipe) =>
    `/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`,
};

export const DETAIL_END_POINT = {
  RECIPE: ({ keyId, serviceId, dataType, startIdx, endIdx, RCP_NM }: Recipe) =>
    `/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}?RCP_NM=${RCP_NM}`,
};
