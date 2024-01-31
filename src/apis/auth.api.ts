import { axiosInstance } from "./core"
import { SignUpType, SignInType } from "../consts/form-schema"
import LocalStorage, { STORAGE_KEYS } from "../repository/user-info-repository"
import { AxiosResponse } from "axios"
import { SignInDataType } from "../type/sign.type"

const PATH = "/user"

export const AuthApi = {
  async SignUp(data: SignUpType) {
    const { userId, password, nickname } = data
    const res = await axiosInstance.post(PATH + "/sign-up", {
      userId,
      password,
      data: {
        nickname,
      },
    })
    return res.data
  },

  /**
   * @param data 
   * @returns return type, error type 
   */
  async SignIn(data: SignInType) {
    const res: AxiosResponse<SignInDataType, Error> = await axiosInstance.post(PATH + "/sign-in", {
      data,
    }) 
     //유저의 정보 저장
    LocalStorage.setItem(
      STORAGE_KEYS.USER_INFO,
      // 회원가입 정보 중 변경 가능한 정보들만??
      // isBoolean : 로그인할 때 남아있어야하고 백엔드 데이터에 그래서 localStorage에 저장을해야하지않을까?
      // 강사님 주신데이터  isLiked? <-백엔드에서 관리가되는 데이터
      // 추가??? {isLiked: false}
      JSON.stringify({
        userId: res.data.userId,
        profileUrl: res.data?.info?.profileUrl,      
      }),
    )
    return res.data
  },
  
  async SignOut() {
    const res = await axiosInstance.post(PATH + "/sign-out")
    return res.data
  },

  async RefreshToken() {
    const res = await axiosInstance.get(PATH + "/refresh")
    return res
  },
}