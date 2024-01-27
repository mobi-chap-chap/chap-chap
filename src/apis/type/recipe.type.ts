export const keyID = import.meta.env.VITE_RECIPE_API_KEY;
export const serviceID = "COOKRCP01";

export type Recipe = {
  // keyID 타입 가져와서 새로운 변수에 할당
  keyId: string;
  serviceId: string;
  dataType: string;
  startIdx: string;
  endIdx: string;
  RCP_NM?: string;
  RCP_PARTS_DTLS?: string;
  CHNG_DT?: string;
  RCP_PAT2?: string;
};

// Recipe 타입 정의
export interface RecipeInfo {
  RCP_SEQ: number;
  ATT_FILE_NO_MAIN: string;
  RCP_PAT2: string;
  INFO_ENG: string;
  RCP_NM: string;
  // 추가 필드가 있다면 여기에 계속 추가
}

interface RecipeDetail {
  ATT_FILE_NO_MAIN: string;
  ATT_FILE_NO_MK: string;
  HASH_TAG: string;
  INFO_CAR: string;
  INFO_ENG: string;
  INFO_FAT: string;
  INFO_NA: string;
  INFO_PRO: string;
  INFO_WGT: string;
  MANUAL01: string;
  MANUAL02: string;
  MANUAL03: string;
  MANUAL04: string;
  MANUAL05: string;
  MANUAL06: string;
  MANUAL07: string;
  MANUAL08: string;
  MANUAL09: string;
  MANUAL10: string;
  MANUAL11: string;
  MANUAL12: string;
  MANUAL13: string;
  MANUAL14: string;
  MANUAL15: string;
  MANUAL16: string;
  MANUAL17: string;
  MANUAL18: string;
  MANUAL19: string;
  MANUAL20: string;
  MANUAL_IMG01: string;
  MANUAL_IMG02: string;
  MANUAL_IMG03: string;
  MANUAL_IMG04: string;
  MANUAL_IMG05: string;
  MANUAL_IMG06: string;
  MANUAL_IMG07: string;
  MANUAL_IMG08: string;
  MANUAL_IMG09: string;
  MANUAL_IMG10: string;
  MANUAL_IMG11: string;
  MANUAL_IMG12: string;
  MANUAL_IMG13: string;
  MANUAL_IMG14: string;
  MANUAL_IMG15: string;
  MANUAL_IMG16: string;
  MANUAL_IMG17: string;
  MANUAL_IMG18: string;
  MANUAL_IMG19: string;
  MANUAL_IMG20: string;
  RCP_NA_TIP: string;
  RCP_NM: string;
  RCP_PARTS_DTLS: string;
  RCP_PAT2: string;
  RCP_SEQ: string;
  RCP_WAY2: string;
}

export interface Info {
  COOKRCP01: {
    RESULT: {
      CODE: string;
      MSG: string;
    };
    row: RecipeDetail[];
    total_count: number;
  };
}
