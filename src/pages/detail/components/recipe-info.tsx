import { OneRecipeIcon } from "../../../assets/icon";

const RecipeInfo = () => {
  return (
    <div className="absolute top-[30px] left-[484px]">
      <div className="flex flex-row ml-[448px]">
        <img src={OneRecipeIcon.bookmarkLine} className="w-[30px]" />
        <img src={OneRecipeIcon.share} className="w-[30px] ml-[30px]" />
      </div>
      <div className="flex flex-row place-items-center mt-[76px]">
        <img src={OneRecipeIcon.dish} className="w-[30px] mx-[30px]" />
        <p className="text-primary-cheese text-[18px]">조리 방법</p>
      </div>
      <h3 className="text-black text-[24px] ml-[30px] mt-[14px]">
        레시피 제목
      </h3>
      <div className="w-[507px] flex flex-row justify-between ml-[30px] mt-[20px]">
        <p className="text-primary-cheese">#tag</p>
        <p className="text-gray-500">000kcal</p>
      </div>
      <div className="w-[280px] flex flex-row justify-between text-gray-500 text-[14px] ml-[30px] my-[20px]">
        <p>탄수화물 00</p>
        <p>단백질 00 </p>
        <p>지방 00 </p>
        <p>나트륨 00 </p>
      </div>
      <div className="ml-[30px]">
        <p className="text-black text-[14px]">재료 정보</p>
        <p className="w-[380px] text-black text-[14px] my-[26px] leading-6">
          두부 곤약잡곡밥 두부 110g(⅓모), 흰쌀 15g, 현미쌀 3g, 찹쌀 3g, 실곤약
          3g 나물준비 콩나물 15g(15개), 표고버섯 4g(1/2장), 애호박 10g(5×2×1cm),
          고사리 15g(7줄기), 당근 15g(5×3×1cm), 소금 3g(2/3작은술), 소금
          약간(나물데침) 비빔고추장 소스 초고추장 5g(1작은술), 플레인요거트
          10g(2작은술), 참기름 2g(1/3작은술) 곁들임 새싹채소 3g
        </p>
      </div>
    </div>
  );
};
export default RecipeInfo;
