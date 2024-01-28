import { FC } from "react"
import ChapButton from "../../../components/button"
import UseNavigation from "../../../hooks/use-navigation"

const NoScrap: FC = () => {
  const { goToMainPage } = UseNavigation()

  return (
    <div className="mt-[250px]  flex flex-col items-center justify-center">
      <p className=" my-[30px] text-[18px] text-primary-chocolate">아직 스크랩된 게시물이 없습니다</p>
      <ChapButton variant={"noResults"} size={"square"} type="button" onClick={goToMainPage}>
        레시피 구경하러 가기
      </ChapButton>
    </div>
  )
}

export default NoScrap
