import ScrapList from "./components/scrap-list";
/* import ScrapRecipe from "./components/scrap.recipes"; */

const ScrapPage = () => {
  return (
    <div className="w-screen min-h-[711px] flex flex-col items-center">
      <ScrapList />
      {/* <ScrapRecipe /> */}
    </div>
  );
};
export default ScrapPage;
