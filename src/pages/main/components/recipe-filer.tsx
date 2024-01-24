import React from "react";
import { SelectDropdown } from "./recipe-select";

const RecipeFilter: React.FC = () => {
  const recipeTypes = ["레시피 종류", "밥", "후식", "반찬", "국 & 찌개"];
  const cookingMethods = [
    "조리 방법",
    "굽기",
    "끓이기",
    "찌기",
    "튀기기",
    "기타",
  ];
  const calorieOrders = ["칼로리 순", "낮은순", "높은순"];

  return (
    <div className="m-[50px] ml-[30px] w-screen mt-[150px]">
      <div className="w-[1024px] m-auto">
        <SelectDropdown label="레시피 종류" options={recipeTypes} />
        <SelectDropdown label="조리 방법" options={cookingMethods} />
        <SelectDropdown label="칼로리 순" options={calorieOrders} />
      </div>
    </div>
  );
};
export default RecipeFilter;
