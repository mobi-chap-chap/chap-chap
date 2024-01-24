import { FC, useState } from "react";
import { HeaderIcon } from "../../assets/icon";
import MyDialog from "../../pages/my/dialog";

const Header: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onShowDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (

    <>
      <div className="layout:container w-screen h-24 fixed bg-white z-[100] inset-x-0 top-0 border-solid border-b-2 border-b-primary-cheese">
        <a href="#" className="absolute top-7 left-7">
          <img src={HeaderIcon.Logo} />
        </a>
        <div className="absolute top-7 right-6 flex flex-row">
          <div className="px-4">
            <img src={HeaderIcon.search} className="w-8" />
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
  );
};
export default Header;
