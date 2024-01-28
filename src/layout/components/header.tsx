import { FC, useState } from "react";
import { HeaderIcon } from "../../assets/icon";
import MyDialog from "../../pages/my/dialog";
import UseNavigation from "../../hooks/use-navigation";

const Header: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const { goToMainPage } = UseNavigation();

  const onShowDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const onShowSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const increaseInput = showSearchBar
    ? {
        transition: "all 0.7s",
        outline: "none",
      }
    : {
        width: "0px",
        height: "50px",
        opacity: "0",
      };

  return (
    <>
      <div className="layout:container w-screen h-24 fixed bg-white z-[100] inset-x-0 top-0 border-solid border-b-2 border-b-primary-cheese">
        <div onClick={() => goToMainPage()} className="absolute top-7 left-7">
          <img src={HeaderIcon.Logo} />
        </div>
        <div className="absolute top-7 right-6 flex flex-row">
          <div className="relative bottom-1.5">
            <input
              style={increaseInput}
              className="w-[390px] h-[50px] rounded-full bg-primary-peanut text-primary-chocolate ps-12 focus:outline-none"
            />
            {showSearchBar ? (
              <button
                className="absolute left-4 top-4 bg-primary-peanut focus:outline-none"
                onClick={onShowSearchBar}
              >
                <img src={HeaderIcon.search} className="w-5" />
              </button>
            ) : (
              <button
                className="absolute right-4 top-2 bg-white items-center focus:outline-none"
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
      {isDialogOpen && <MyDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />}
    </>
  );
};
export default Header;
