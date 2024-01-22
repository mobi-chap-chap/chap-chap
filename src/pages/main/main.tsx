import RecipeFilter from "./components/recipe-filer";
import RecipeList from "./components/recipe-list";

const MainPage = () => {
  return (
    <>
      {/* 이미지 슬라이더 */}
      <RecipeFilter />
      <RecipeList />
      <hr />
    </>
  );
};
export default MainPage;
