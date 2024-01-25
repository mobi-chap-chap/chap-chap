import { FC, useState } from "react";
import UseNavigation from "../../hooks/use-navigation";
import { skipTitleView } from "../../utils/overflow-helper";
import { OneRecipeIcon } from "../../assets/icon";
import { OneRecipeProps } from "./one-recipe-type";

const OneRecipe: FC<OneRecipeProps> = ({
  recipeImg,
  recipeType,
  recipeKal,
  recipeTitle,
}) => {
  const [isLikedScrap, setIsLikedScrap] = useState(false);

  //스크랩 저장
  const onScrapToggle = () => {
    setIsLikedScrap((prev) => !prev);
    if (isLikedScrap === false) return alert("스크랩이 저장되었습니다 :)");
    if (isLikedScrap === true) return alert("스크랩이 취소되었습니다 :)");
  };

  const { goToDetailPage } = UseNavigation();

  const urlParams = new URLSearchParams(window.location.href);
  urlParams.append("RCP_NM", recipeTitle);

  // navigate : detail-recipe
  const onClickToDetailPage = (recipeTitle: string) => {
    goToDetailPage(recipeTitle);
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      onClick={() => onClickToDetailPage(recipeTitle)}
      className="w-[240px] h-[382px]  m-auto cursor-pointer rounded-lg border border-solid border-primary-peanut"
    >
      <div className="w-[239px] h-[240px] transition delay-100  absolute  hover:bg-black opacity-40 rounded-t-lg"></div>
      <div>
        <img
          src={recipeImg}
          alt="Recipe Image"
          className="w-[239px] h-[240px] rounded-t-lg "
        />
      </div>

      <div className="flex  flex-col  my-[10px]">
        <div className="flex justify-between items-center px-[13px] pl-[15px] ">
          <div className="flex text-[14px] ">
            <div>{recipeType}</div>
            <div className="ml-[27px]">{recipeKal}kal</div>
          </div>

          <div>
            <img
              className="w-[30px]"
              src={
                isLikedScrap
                  ? OneRecipeIcon.bookmarkFull
                  : OneRecipeIcon.bookmarkLine
              }
              onClick={onScrapToggle}
            />
          </div>
        </div>

        <div className="pl-[15px] mt-[65px] text-[18px]">
          {skipTitleView(recipeTitle)}
        </div>
      </div>
    </div>
  );
};
export default OneRecipe;
