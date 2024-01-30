import { ChangeEvent, FC } from "react";
import { SelectDropdown } from "./recipe-select";
import { useQueryClient } from "react-query";
import { Info } from "../../../type/recipe.type";
import { QUERY_KEY } from "../../../consts/query-key";
import { useSearchParams } from "react-router-dom";

const RecipeFilter: FC = () => {
  const qc = useQueryClient()
  const recipeTypes = [ "밥", "후식", "반찬", "국 & 찌개"];
  const cookingMethods = ["굽기", "끓이기","찌기","튀기기","기타"];
  const calorieOrders = ["낮은순", "높은순"];

    //음식종류
    const handleRecipeTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
      // backend url ---> prameter --> useQueryParams
      // queryKey : searchParam의 결과
      const value = e.target.value //값 다 찍혀나옴
      const [searchParams, setSearchParams] = useSearchParams()
      setSearchParams({ type: value })
      const types = searchParams.get("type")
      console.log(types)
      // 아아아아아아아아아악!!!!!!!!!!!!!!!!
    }

   //조리방법
   const handleRecipeRCPWAYChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    qc.setQueryData<
      | {
          pageParams: [undefined]
          pages: Info[]
        }
      | undefined
    >([QUERY_KEY.MORE_RECIPE_LIST], old => {
      if (!old) return
      console.log(old)
      const pages = old.pages.map(page => ({
        ...page,
        COOKRCP01: {
          ...page.COOKRCP01,
          row: page.COOKRCP01.row.filter(v => {
            if (value === "굽기") {
              return v.RCP_WAY2 === "굽기"
            }
            if (value === "끓이기") {
              return v.RCP_WAY2 === "끓이기"
            }
            if (value === "찌기") {
              return v.RCP_WAY2 === "찌기"
            }
            if (value === "튀기기") {
              return v.RCP_WAY2 === "튀기기"
            }
            if (value === "기타") {
              // console.log(value === "기타")
              return v.RCP_WAY2 === "기타"
            }

            return 0
          }),
        },
      }))
      return {
        ...old,
        pages,
      }
    })
  }

  //열량
  const handleRecipeENGChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    // if문
    qc.setQueryData<
      | {
          pageParams: [undefined]
          pages: Info[]
        }
      | undefined
    >([QUERY_KEY.MORE_RECIPE_LIST], old => {
      if (!old) return
      console.log(old) //데이터
      const pages = old.pages.map(page => ({
        ...page,
        COOKRCP01: {
          ...page.COOKRCP01,
          row: page.COOKRCP01.row.sort((a, b) => {
            if (value === "낮은순") {
              return parseInt(a.INFO_ENG) - parseInt(b.INFO_ENG)
            }
            if (value === "높은순") {
              return parseInt(b.INFO_ENG) - parseInt(a.INFO_ENG)
            }

            return 0
          }),
        },
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
        <SelectDropdown label="레시피 종류" options={recipeTypes} onChange={handleRecipeTypeChange}/>
        <SelectDropdown label="조리 방법" options={cookingMethods} onChange={handleRecipeRCPWAYChange} />
        <SelectDropdown label="칼로리 순" options={calorieOrders} onChange={handleRecipeENGChange} />
      </div>
    </div>
  );
};
export default RecipeFilter;
