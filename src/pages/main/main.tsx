import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";

const MainPage: React.FC = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* 이미지 슬라이더 */}
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
