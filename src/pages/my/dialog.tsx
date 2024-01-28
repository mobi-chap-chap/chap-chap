import { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { MyDialogIcon } from "../../assets/icon"
import { MyDialogProps } from "../../type/user.type"
import { AuthApi } from "../../apis/auth.api"
import TokenRepository from "../../repository/token-repository"

const MyDialog: FC<MyDialogProps> = ({ isDialogOpen, setIsDialogOpen }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [updateLocalStorage, setUpdateLocalStorage] = useState(false)

  const handleClick = () => {
    // input onClicked
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const changeProfileImage = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    console.log(selectedFile)
    if (selectedFile) {
      setSelectedFile(selectedFile)

      // 이미지를 base64로 변환
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Image = reader.result as string
        setProfileImage(base64Image)
        setUpdateLocalStorage(true)
      }
      // 이미지 파일을 Base64로 읽어오기
      reader.readAsDataURL(selectedFile)

      // 이미지 파일을 Blob으로 읽어오기
      // const blob = new Blob([selectedFile])

      // Blob을 읽어와서 Base64로 변환
      // reader.readAsDataURL(blob)
    }
  }

  // form Data
  // PatchProfileImg

  const handleConfirm = () => {
    const isConfirmed = window.confirm("변경 사항으로 저장하시겠습니까?")
    console.log("isConfirmed:", isConfirmed) // true
    console.log("updateLocalStorage:", updateLocalStorage) // true
    if (isConfirmed && updateLocalStorage && profileImage) {
      console.log("Setting profileImage to localStorage...")
      TokenRepository.setToken(profileImage)
      console.log("handleConfirm의 getToken():", TokenRepository.getToken())
      window.alert("저장되었습니다!")
      setUpdateLocalStorage(false)
      setIsDialogOpen(false)
    }
  }

  // useEffect를 통해 confirm이 실행된 후 localStorage 업데이트
  useEffect(() => {
    if (updateLocalStorage) {
      console.log("Opening modal...")
      handleConfirm()
    }
  }, [updateLocalStorage, profileImage])

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
      <div className="absolute right-[35px] top-[120px] z-10 h-[234px] w-[300px] rounded-xl border border-solid border-primary-cheese bg-white text-primary-chocolate">
        <div className="m-[24px] flex flex-row">
          <div className="mr-[24px] h-[60px] w-[60px] overflow-hidden rounded-full">
            {/*             <img
              src={selectedFile ? URL.createObjectURL(selectedFile) : MyDialogIcon.defaultProfile01}
              onError={() => console.log("Image failed to load")}
            /> */}
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : MyDialogIcon.defaultProfile01} alt="Profile" />
          </div>
          <div className="mt-[14px]">
            <h3 className="mb-[4px] text-[18px]">username</h3>
            <p className="text-[12px] text-gray-500">member number</p>
          </div>
        </div>
        <div className="mx-[27px] my-[14px] h-[1px] w-[242px] bg-primary-cheese" />
        <div className="flex place-content-center place-items-center">
          <div
            onClick={handleClick}
            className="flex h-[72px] w-[72px] cursor-pointer flex-col place-content-center place-items-center rounded-md transition-colors duration-300 hover:bg-primary-peanut"
          >
            <img src={MyDialogIcon.editUserInfo} className="w-[40px]" />
            <p className="my-1.5 text-[10px]">사진 변경</p>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={changeProfileImage} />
          </div>
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
      </div>
    )
  )
}
export default MyDialog
