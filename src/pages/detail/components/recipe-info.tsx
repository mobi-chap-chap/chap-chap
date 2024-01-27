import { FC } from "react";
import { OneRecipeIcon } from "../../../assets/icon";
import { RecipeDetail } from "../../../type/recipe.type";

const RecipeInfo: FC<RecipeDetail> = (recipeData) => {
  const {
    RCP_WAY2,
    RCP_NM,
    INFO_ENG,
    HASH_TAG,
    INFO_CAR,
    INFO_PRO,
    INFO_FAT,
    INFO_NA,
    RCP_PARTS_DTLS,
  } = recipeData;

  return (
    <div className="absolute top-[30px] left-[484px]">
      <div className="flex flex-row ml-[448px]">
        <img src={OneRecipeIcon.bookmarkLine} className="w-[30px]" />
        <img src={OneRecipeIcon.share} className="w-[30px] ml-[30px]" />
      </div>
      <div className="flex flex-row place-items-center mt-[76px]">
        <img src={OneRecipeIcon.dish} className="w-[30px] mx-[30px]" />
        <p className="text-primary-cheese text-[18px]">{RCP_WAY2}</p>
      </div>
      <h3 className="text-black text-[24px] ml-[30px] mt-[14px]">{RCP_NM}</h3>
      <div className="w-[507px] flex flex-row justify-between ml-[30px] mt-[20px]">
        <p className="text-primary-cheese">#{HASH_TAG}</p>
        <p className="text-gray-500">{INFO_ENG}kcal</p>
      </div>
      <div className="w-[280px] flex flex-row justify-between text-gray-500 text-[14px] ml-[30px] my-[20px]">
        <p>탄수화물 {INFO_CAR}</p>
        <p>단백질 {INFO_PRO} </p>
        <p>지방 {INFO_FAT} </p>
        <p>나트륨 {INFO_NA} </p>
      </div>
      <div className="ml-[30px]">
        <p className="text-black text-[14px]">재료 정보</p>
        <p className="w-[380px] text-black text-[14px] my-[26px] leading-6">
          {RCP_PARTS_DTLS}
        </p>
      </div>
    </div>
  );
};
export default RecipeInfo;
