export const keyID = import.meta.env.VITE_RECIPE_API_KEY;
export const serviceID = "COOKRCP01";
export const dataTYPE = "json";

export const END_POINT = {
  RECIPE: ({ startIdx, endIdx }: { startIdx: number; endIdx: number }) =>
    `/${keyID}/${serviceID}/${dataTYPE}/${startIdx}/${endIdx}`,
};

export const DETAIL_END_POINT = {
  RECIPE: ({ RCP_NM }: { RCP_NM: string }) =>
    `/${keyID}/${serviceID}/${dataTYPE}/1/1?RCP_NM=${RCP_NM}`,
};
