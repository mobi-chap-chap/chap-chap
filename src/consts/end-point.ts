export const keyID = import.meta.env.VITE_RECIPE_API_KEY;
export const serviceID = "COOKRCP01";
export const dataTYPE = "json";

export const END_POINT = {
  RECIPE: ({ startIdx, endIdx, RCP_PAT2 }: { startIdx: number; endIdx: number, RCP_PAT2?: string }) => {
    let url = `/${keyID}/${serviceID}/${dataTYPE}/${startIdx}/${endIdx}`
    if(RCP_PAT2){
      url += `/RCP_PAT2=${RCP_PAT2}`
    } 
  return url
  }
  
};

export const DETAIL_END_POINT = {
  RECIPE: ({
    startIdx,
    endIdx,
    RCP_NM,
  }: {
    startIdx: number;
    endIdx: number;
    RCP_NM: string;
  }) =>
    `/${keyID}/${serviceID}/${dataTYPE}/${startIdx}/${endIdx}?RCP_NM=${RCP_NM}`,
};

