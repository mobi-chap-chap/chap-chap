import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";
import MyDialog from "../my/dialog";
import ChapCarousel from "../../components/carousel";
import { Slides } from "../../assets/slider-images";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <MyDialog isDialogOpen={false} />
      <ChapCarousel Slides={Slides} />
      <RecipeFilter />
      <RecipeList />
    </div>
  );
};
export default MainPage;
