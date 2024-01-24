import { useState } from "react";
import scrapLineIcon from "../../assets/icons/bookmark-line.png";
import scrapPullIcon from "../../assets/icons/bookmark-full.png";
type OneRecipeProps = {
  recipeImg: string;
  recipeType: string;
  recipeKal: number;
  recipeTitle: string;
};
const OneRecipe: React.FC<OneRecipeProps> = ({
  recipeImg,
  recipeType,
  recipeKal,
  recipeTitle,
}) => {
  const [isLikedScrap, setIsLikedScrap] = useState(false);
  //글자 수
  const MAX_TITLE_LENGTH = 15;
  const skipTitleView = (recipeTitle: string) => {
    if (recipeTitle.length > MAX_TITLE_LENGTH) {
      return recipeTitle.substring(0, MAX_TITLE_LENGTH) + "...";
    }
    return recipeTitle;
  };

  //스크랩 저장
  const onScrapToggle = () => {
    setIsLikedScrap((prev) => !prev);
    if (isLikedScrap === false) return alert("스크랩이 저장되었습니다 :)");
    if (isLikedScrap === true) return alert("스크랩이 취소되었습니다 :)");
  };
  return (
    <>
      <div className="w-[240px] h-[382px]  m-auto cursor-pointer rounded-lg border border-solid border-primary-peanut">
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
              <div className="ml-[27px]">{Math.floor(recipeKal)}kal</div>
            </div>

            <div>
              <img
                className="w-[30px]"
                src={isLikedScrap ? scrapPullIcon : scrapLineIcon}
                onClick={onScrapToggle}
              />
            </div>
          </div>

          <div className="pl-[15px] mt-[65px] text-[18px]">
            {skipTitleView(recipeTitle)}
          </div>
        </div>
      </div>
    </>
  );
};
export default OneRecipe;
