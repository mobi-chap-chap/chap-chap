import { FC, useState } from "react"
import { HeaderIcon } from "../../assets/icon"
import MyDialog from "../../pages/my/dialog"
import UseNavigation from "../../hooks/use-navigation"

const Header: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  const { goToMainPage } = UseNavigation()

  const onShowDialog = () => {
    setIsDialogOpen(prev => !prev)
  }

  const onShowSearchBar = () => {
    setShowSearchBar(prev => !prev)
  }

  const increaseInput = showSearchBar
    ? {
        transition: "all 0.7s",
        outline: "none",
      }
    : {
        width: "0px",
        height: "50px",
        opacity: "0",
      }

  return (
    <>
      <div className="layout:container fixed inset-x-0 top-0 z-[100] h-24 w-screen border-b-2 border-solid border-b-primary-cheese bg-white">
        <div onClick={() => goToMainPage()} className="absolute left-7 top-7">
          <img src={HeaderIcon.Logo} />
        </div>
        <div className="absolute right-6 top-7 flex flex-row">
          <div className="relative bottom-1.5">
            <input
              style={increaseInput}
              className="h-[50px] w-[390px] rounded-full bg-primary-peanut ps-12 text-primary-chocolate focus:outline-none"
            />
            {showSearchBar ? (
              <button className="absolute left-4 top-4 bg-primary-peanut focus:outline-none" onClick={onShowSearchBar}>
                <img src={HeaderIcon.search} className="w-5" />
              </button>
            ) : (
              <button
                className="absolute right-4 top-2 items-center bg-white focus:outline-none"
                onClick={onShowSearchBar}
              >
                <img src={HeaderIcon.search} className="w-8" />
              </button>
            )}
          </div>
          <div className="px-4">
            <img src={HeaderIcon.bookmarkLine} className="w-8" />
          </div>
          <div onClick={onShowDialog} className="px-4">
            <img src={HeaderIcon.account} className="w-8" />
          </div>
        </div>
      </div>
      {isDialogOpen && <MyDialog isDialogOpen={isDialogOpen} />}
    </>
  )
}
export default Header
