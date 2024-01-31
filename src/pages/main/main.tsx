import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";
import MyDialog from "../my/dialog";
import ChapCarousel from "../../components/carousel";
import { Slides } from "../../assets/slider-images";
import { FC, useState } from "react";

const MainPage: FC = () => {
  const [, setIsDialogOpen] = useState(false);
  
  return (
    <div className="w-screen overflow-x-hidden">
      <MyDialog isDialogOpen={false} setIsDialogOpen={setIsDialogOpen} />
      <ChapCarousel Slides={Slides} />
      <RecipeFilter />
      <RecipeList />
    </div>
  );
};
export default MainPage;
