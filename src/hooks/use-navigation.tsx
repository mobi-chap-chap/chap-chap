import { useNavigate } from "react-router-dom"

/**
 * @returns goToMainPage 함수를 외부에서 호출할 수 있도록! 특정 경로로 페이지 이동이 가능하다.
 */
const UseNavigation = () => {
  const navigate = useNavigate()

  const goToMainPage = () => {
    navigate("/chap-chap")
  }
  const goToSignUp = () => {
    navigate("/")
  }

  const goToDetailPage = (recipeTitle: string) => {
    navigate(`/chap-chap/recipe/${recipeTitle}`, {
      state: { RCP_NM: recipeTitle },
    })
  }

  return {
    goToMainPage,
    goToSignUp,
    goToDetailPage,
  }
}

export default UseNavigation
