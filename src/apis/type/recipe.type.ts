
export const keyID = import.meta.env.VITE_RECIPE_API_KEY
export const serviceID = 'COOKRCP01'

export type Recipe = {
    // keyID 타입 가져와서 새로운 변수에 할당
    keyId : string,
    serviceId : string,
    dataType : string,
    startIdx : string,
    endIdx : string,
    RCP_NM? : string,
    RCP_PARTS_DTLS? : string,
    CHNG_DT? : string,
    RCP_PAT2? : string,
}