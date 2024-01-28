import { useEffect, useState } from "react"
import { MainIcon } from "../../assets/icon"

const ScrollTop = () => {
  const [isShowButton, setIsShowButton] = useState(false)

  const onHandleScroll = () => {
    const { scrollY } = window
    scrollY > 50 ? setIsShowButton(true) : setIsShowButton(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll)
    return () => {
      window.removeEventListener("scroll", onHandleScroll)
    }
  }, [])

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (window.location.pathname === "/") return null

  const dynamicClass = isShowButton
    ? "fixed bottom-30 right-80 w-12 h-12 z-30 rounded-full flex place-content-center bg-primary-peanut"
    : "hide"

  return (
    <div
      onClick={onScrollTop}
      className="fixed bottom-10 right-[10%] z-30 flex h-12 w-12 place-content-center rounded-full bg-primary-peanut transition-colors ease-in-out hover:bg-primary-cheese"
    >
      <img src={MainIcon.top} className="mt-2 h-8 w-8" />
    </div>
  )
}

export default ScrollTop
