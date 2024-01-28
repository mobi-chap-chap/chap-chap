import { FC } from "react"
import { MyDialogIcon } from "../../assets/icon"
import { MyDialogProps } from "../../type/user.type"

const MyDialog: FC<MyDialogProps> = ({ isDialogOpen }) => {
  /* const changeProfileImage = () => {};
   */
  const navigateMyRecipePage = () => {
    alert("앗! 아직 페이지 개설 중입니다! 조금만 기다려주세요")
  }

  /* const onClickLogout = () => {}; */

  return (
    isDialogOpen && (
      <div className="absolute right-[35px] top-[120px] z-10 h-[234px] w-[300px] rounded-xl border border-solid border-primary-cheese bg-white text-primary-chocolate">
        <div className="m-[24px] flex flex-row">
          <img src={MyDialogIcon.defaultProfile01} className="mr-[24px] w-[60px]" />
          <div className="mt-[14px]">
            <h3 className="mb-[4px] text-[18px]">username</h3>
            <p className="text-[12px] text-gray-500">member number</p>
          </div>
        </div>
        <div className="mx-[27px] my-[14px] h-[1px] w-[242px] bg-primary-cheese" />
        <div className="flex place-content-center place-items-center">
          <div className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut">
            <img src={MyDialogIcon.editUserInfo} className="w-[40px]" />
            <p className="my-1.5 text-[10px]">사진변경</p>
          </div>
          <div
            onClick={navigateMyRecipePage}
            className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut"
          >
            <img src={MyDialogIcon.recipe} className="my-[5px] w-[32px]" />
            <p className="my-1.5 text-[10px]">내레시피</p>
          </div>
          <div className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut">
            <img src={MyDialogIcon.logout} className="my-1.5 w-[28px]" />
            <p className="my-1.5 text-[10px]">로그아웃</p>
          </div>
        </div>
      </div>
    )
  )
}
export default MyDialog
