import { ChangeEvent, FC, FormEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { MyDialogIcon } from "../../assets/icon"
import { MyDialogProps } from "../../type/user.type"
import { AuthApi } from "../../apis/auth.api"
import TokenRepository from "../../repository/token-repository"
import { useMutation } from "react-query"
import { UserApi } from "../../apis/user.api"

const MyDialog: FC<MyDialogProps> = ({ isDialogOpen, setIsDialogOpen }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>("")

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUploadedImage(imageUrl)
    }
  }

  const handleClick = () => {
    // input onClicked
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const { mutateAsync: mutateChangeProfile } = useMutation(async (formData: FormData) => {
    const file = formData.get("image") as File
    return UserApi.PatchProfileImg(file).then(response => response.data)
  })

  const onChangeMyInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    const imageInput = (e.target as HTMLFormElement).elements.namedItem("image") as HTMLInputElement

    if (imageInput && imageInput.type === "file") {
      formData.append("image", imageInput.files?.[0] || "")
    }

    try {
      await mutateChangeProfile(formData)
      const token = URL.createObjectURL(formData.get("image") as Blob)
      TokenRepository.setToken(token)
      setIsDialogOpen(false)
    } catch (error) {
      setIsDialogOpen(true)
    }
  }

  const navigateMyRecipePage = () => {
    alert("앗! 아직 페이지 개설 중입니다! 조금만 기다려주세요")
  }

  const onClickLogout = async () => {
    try {
      await AuthApi.SignOut()
      setIsDialogOpen(true)
      setTimeout(() => {
        window.location.replace("/")
      }, 1000)
    } catch (error) {
      error && alert("이런, 로그아웃에 실패했습니다. 잠시 뒤 다시 시도해주세요.")
    }
  }

  return (
    isDialogOpen && (
      <form
        onSubmit={onChangeMyInfo}
        className="absolute right-[35px] top-[120px] z-10 h-[234px] w-[300px] rounded-xl border border-solid border-primary-cheese bg-white text-primary-chocolate"
      >
        <div className="m-[24px] flex flex-row">
          <div className="mr-[24px] h-[60px] w-[60px] overflow-hidden rounded-full">
            <img
              src={uploadedImage || MyDialogIcon.defaultProfile01}
              alt="Profile"
              onError={e => console.error("Image failed to load", e)}
            />{" "}
          </div>
          <div
            onClick={handleClick}
            className="place-item-center absolute left-[24%] top-[30%] flex h-[18px] w-[18px] place-content-center overflow-hidden rounded-full bg-primary-peanut hover:bg-primary-cheese"
          >
            <img src={MyDialogIcon.pencil} className="mt-[4px] h-[8px] w-[8px]" />
          </div>
          <div className="mt-[14px]">
            <h3 className="mb-[4px] text-[18px]">username</h3>
            <p className="text-[12px] text-gray-500">member number</p>
          </div>
        </div>
        <div className="mx-[27px] my-[14px] h-[1px] w-[242px] bg-primary-cheese" />
        <div className="flex place-content-center place-items-center">
          <button
            type="submit"
            className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut"
          >
            <img src={MyDialogIcon.editUserInfo} className="w-[40px]" />
            <p className="my-1.5 text-[10px]">사진저장</p>
            <input id="imgUpload" ref={fileInputRef} name="image" type="file" accept="image/*" className="hidden" />
          </button>
          <div
            onClick={navigateMyRecipePage}
            className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut"
          >
            <img src={MyDialogIcon.recipe} className="my-[5px] w-[32px]" />
            <p className="my-1.5 text-[10px]">내레시피</p>
          </div>
          <div
            onClick={onClickLogout}
            className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut"
          >
            <img src={MyDialogIcon.logout} className="my-1.5 w-[28px]" />
            <p className="my-1.5 text-[10px]">로그아웃</p>
          </div>
        </div>
      </form>
    )
  )
}
export default MyDialog
