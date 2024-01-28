import { FC } from "react"
import { RecipeDetail } from "../../../type/recipe.type"

interface StepData {
  stepKey: string
  imgKey: string
}

const Steps: FC<RecipeDetail> = recipeData => {
  const stepKeys: StepData[] = Object.keys(recipeData)
    .filter(key => key.startsWith("MANUAL"))
    .map(stepKey => ({
      stepKey,
      imgKey: `MANUAL_IMG${stepKey.slice(6)}`,
    }))

  return (
    <div className="relative w-[100%] pb-[10%] text-black">
      <h3 className="my-[60px] text-primary-chocolate">만드는 법</h3>
      <div className="relative">
        <div className="px-[116px] pb-[100px]">
          {stepKeys.map(({ stepKey, imgKey }, idx) => {
            // 해당 키에 대한 값이 없는 경우 건너뛰기
            if (!recipeData[stepKey as keyof RecipeDetail] && !recipeData[imgKey as keyof RecipeDetail])
              return <div className="invisible" />
            return (
              <div key={idx}>
                {recipeData[imgKey as keyof RecipeDetail] && (
                  <img
                    src={recipeData[imgKey as keyof RecipeDetail]}
                    className="h-[438px] w-[787px] py-[30px]"
                    alt={`Step ${idx + 1}`}
                  />
                )}
                {recipeData[imgKey as keyof RecipeDetail] && <p>{recipeData[stepKey as keyof RecipeDetail]}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Steps
