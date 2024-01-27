import { Recipe } from "../../apis/type/recipe.type";

// OneRecipe의 props 타입 정의
export type OneRecipeProps = {
  /* recipeData: Recipe; */
  recipeNum: string;
  recipeName: string;
  recipeImg: string;
  recipeType: string;
  recipeKal: string;
  recipeTitle: string;
};
