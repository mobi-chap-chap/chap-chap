import NoScrap from "./components/no-scrap";
import ScrapList from "./components/scrap-list";
import ScrapRecipe from "./components/scrap.recipes";

const ScrapPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <ScrapList />
      {/* <NoScrap /> */}
      <ScrapRecipe />
    </div>
  );
};
export default ScrapPage;
