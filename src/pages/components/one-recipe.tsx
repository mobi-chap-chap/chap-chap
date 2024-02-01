import { FC} from "react";
import UseNavigation from "../../hooks/use-navigation";
import { skipTitleView } from "../../utils/overflow-helper";
import { OneRecipeIcon } from "../../assets/icon";
import { OneRecipeProps } from "../../type/recipe.type";
import { useMutation } from "react-query";
import { RecipeApi } from "../../apis/recipe.api";

const OneRecipe: FC<OneRecipeProps> = ({
  recipeImg,
  recipeType,
  recipeKal,
  recipeTitle,
}) => {
  const { mutateAsync: onScrapMutation } = useMutation({
    mutationFn : ({recipeImg, recipeTitle}:{recipeImg:string, recipeTitle:string }) => RecipeApi.PostScrapRecipe({
      recipeImg,
      recipeTitle
    })
  });

  const onScrapToggle = async () => {
    await onScrapMutation({
      recipeImg,
      recipeTitle,
    })
    alert('스크랩에 성공하셨습니다 :)')
  };

  const { goToDetailPage } = UseNavigation();

  const urlParams = new URLSearchParams(window.location.href);
  urlParams.append("RCP_NM", recipeTitle);

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
          <div onClick={onScrapToggle}>
            <img
              className="w-[30px]"
              src={OneRecipeIcon.bookmarkLine}
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