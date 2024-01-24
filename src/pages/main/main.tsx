import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";
import MyDialog from "../my/dialog";
import ChapCarousel from "../../components/carousel";
import { Slides } from "../../assets/slider-images";

const MainPage: React.FC = () => {
  return (
      <div className="w-screen overflow-x-hidden">
      <MyDialog isDialogOpen={false} />
      <ChapCarousel Slides={Slides} />
      <RecipeFilter />
      <RecipeList />
      <hr />
    </div>
  );
};
export default MainPage;
/*

할일

*/
