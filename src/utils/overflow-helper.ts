// max length
const MAX_TITLE_LENGTH = 15

export const skipTitleView = (recipeTitle: string) => {
  if (recipeTitle.length > MAX_TITLE_LENGTH) {
    return recipeTitle.substring(0, MAX_TITLE_LENGTH) + "..."
  }
  return recipeTitle
}
