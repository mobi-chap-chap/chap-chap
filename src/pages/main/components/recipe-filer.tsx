import { ChangeEvent, FC } from "react";
import { SelectDropdown } from "./recipe-select";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "../../../consts/query-key";
import { Info } from "../../../type/recipe.type";

const RecipeFilter: FC = () => {
  const qc = useQueryClient();
  const recipeTypes = [ "밥", "후식", "반찬", "국 & 찌개"];
  const cookingMethods = [
    "굽기",
    "끓이기",
    "찌기",
    "튀기기",
    "기타",
  ];
  const calorieOrders = ["낮은순", "높은순"];

  const handleRecipeTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value); 
    // backend url ---> prameter --> useQueryParams
  };

  const handleRecipeENGChange = (e: ChangeEvent<HTMLSelectElement>) => {
    qc.setQueryData<{
      pageParams: [undefined],
      pages: Info[]
     } | undefined>( [QUERY_KEY.MORE_RECIPE_LIST], old => {
      if(!old) return;
      console.log(old)
      const pages = old.pages.map((page) => ({
        ...page, 
        COOKRCP01: {
          ...page.COOKRCP01,
          row: page.COOKRCP01.row.sort((a,b) => parseInt(a.INFO_ENG) - parseInt(b.INFO_ENG))
        }
      }))
      return {
        ...old,
        pages,
      }
    })
  }

 



  return (
    <div className="m-[20px] ml-[30px] w-screen mt-[150px]">
      <div className="w-[1024px] m-auto">
        <SelectDropdown label="레시피 종류" options={recipeTypes}  onChange={handleRecipeTypeChange}/>
        <SelectDropdown label="조리 방법" options={cookingMethods} />
        <SelectDropdown label="칼로리 순" options={calorieOrders}onChange={handleRecipeENGChange} />
      </div>
    </div>
  );
};
export default RecipeFilter;
