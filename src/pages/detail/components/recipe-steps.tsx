import { FC } from "react";
import { RecipeDetail } from "../../../apis/type/recipe.type";

const Steps: FC<RecipeDetail> = (recipeData) => {
  const { MANUAL01, MANUAL_IMG01 } = recipeData;

  return (
    <div className="text-black">
      <h3 className="text-primary-chocolate my-[60px]">만드는 법</h3>
      <div className="h-[1000px]">
        <div className=" px-[116px]">
          {manualList.map((menual, idx) => (
            <div key={idx + 1}>
              <h3>step {menual}.</h3>
              <img
                src={MANUAL_IMG01}
                className="w-[787px] h-[438px] py-[30px]"
              />
              <p>{MANUAL01}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Steps;
