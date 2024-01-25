import RecipeInfo from "./components/recipe-info";
import Steps from "./components/steps";

const DetailRecipe = () => {
  return (
    <div className="w-[1024px] mx-[448px] relative top-[160px]">
      <div className="h-[515px] border border-solid border-b-primary-cheese flex flex-row">
        {/* carousel로 대체 */}
        <div className="w-[484px] h-[484px] bg-primary-peanut text-black text-center pt-[22%]">
          carousel 위치
        </div>
        <RecipeInfo />
      </div>
      <Steps />
    </div>
  );
};
export default DetailRecipe;
