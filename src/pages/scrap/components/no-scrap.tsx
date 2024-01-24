import { FC } from "react";
import ChapButton from "../../../components/button";
import UseNavigation from "../../../hooks/use-navigation";

const NoScrap: FC = () => {
  const { goToMainPage } = UseNavigation();

  return (
    <div className="flex flex-col items-center justify-center mt-[250px]">
      <p className=" text-primary-chocolate text-[18px] my-[30px]">
        스크랩된 게시물이 없습니다
      </p>
      <ChapButton
        variant={"noResults"}
        size={"square"}
        type="button"
        onClick={goToMainPage}
      >
        다른 레시피 구경하러가기
      </ChapButton>
    </div>
  );
};

export default NoScrap;
