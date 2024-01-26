import { RecipeInfo } from "../../apis/recipe/recipe.type";

// OneRecipe의 props 타입 정의
export type OneRecipeProps = {
  recipeData: RecipeInfo;
  recipeNum: number;
  recipeName: string;
  recipeImg: string;
  recipeType: string;
  recipeKal: string;
  recipeTitle: string;
};
