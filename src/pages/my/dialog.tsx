import { FC } from "react";
import { MyDialogIcon } from "../../assets/icon";
import { MyDialogProps } from "./dialog.interface";

const MyDialog: FC<MyDialogProps> = ({ isDialogOpen }) => {
  /* const changeProfileImage = () => {};
   */
  const navigateMyRecipePage = () => {
    alert("앗! 아직 페이지 개설 중입니다! 조금만 기다려주세요");
  };

  /* const onClickLogout = () => {}; */

  return (
    isDialogOpen && (
      <div className="w-[300px] h-[234px] rounded-xl bg-white border border-solid border-primary-cheese z-10 absolute top-[120px] right-[35px] text-primary-chocolate">
        <div className="flex flex-row m-[24px]">
          <img
            src={MyDialogIcon.defaultProfile01}
            className="w-[60px] mr-[24px]"
          />
          <div className="mt-[14px]">
            <h3 className="text-[18px] mb-[4px]">username</h3>
            <p className="text-[12px] text-gray-500">member number</p>
          </div>
        </div>
        <div className="w-[242px] h-[1px] bg-primary-cheese my-[14px] mx-[27px]" />
        <div className="flex place-items-center place-content-center">
          <div className="w-[72px] h-[72px] rounded-md hover:bg-primary-peanut flex place-items-center place-content-center flex-col transition-colors duration-300 cursor-pointer">
            <img src={MyDialogIcon.editUserInfo} className="w-[40px]" />
            <p className="text-[10px] my-1.5">사진변경</p>
          </div>
          <div
            onClick={navigateMyRecipePage}
            className="w-[72px] h-[72px] rounded-md hover:bg-primary-peanut flex place-items-center place-content-center flex-col transition-colors duration-300 cursor-pointer"
          >
            <img src={MyDialogIcon.recipe} className="w-[32px] my-[5px]" />
            <p className="text-[10px] my-1.5">내레시피</p>
          </div>
          <div className="w-[72px] h-[72px] rounded-md hover:bg-primary-peanut flex place-items-center place-content-center flex-col transition-colors duration-300 cursor-pointer">
            <img src={MyDialogIcon.logout} className="w-[28px] my-1.5" />
            <p className="text-[10px] my-1.5">로그아웃</p>
          </div>
        </div>
      </div>
    )
  );
};
export default MyDialog;
