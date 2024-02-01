import { axiosInstance } from "./core"
import { SignUpType, SignInType } from "../consts/form-schema"
import LocalStorage, { STORAGE_KEYS } from "../repository/user-info-repository"

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
  
  async SignIn(data: SignInType) {
    const res = await axiosInstance.post(PATH + "/sign-in", {
      userId: data.userId,
      password: data.password,
    }) 
     //유저의 정보 저장
    LocalStorage.setItem(
      STORAGE_KEYS.USER_INFO,
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