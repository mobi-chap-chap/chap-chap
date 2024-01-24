import { useEffect } from "react";
import { getRecipe } from "../../apis/recipe.api";
import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";
import MyDialog from "../my/dialog";
import ChapCarousel from "../../components/carousel";
import { Slides } from "../../assets/slider-images";

const MainPage: React.FC = () => {
  useEffect(() => {
    getRecipe({
      keyId: "e6f2e825c5c942da8298", // 실제 값으로 대체
      serviceId: "COOKRCP01", // 실제 값으로 대체
      dataType: "json", // 실제 값으로 대체
      startIdx: "1", // 시작 인덱스 값
      endIdx: "10", // 종료 인덱스 값
    });
  }, []);

  return (
    <div>
      <MyDialog isDialogOpen={false} />
      <ChapCarousel Slides={Slides} />
      <RecipeFilter />
      <RecipeList />
      <hr />
    </div>
  );
};
export default MainPage;
