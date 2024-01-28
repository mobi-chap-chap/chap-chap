import { axiosInstance } from "./core"
import { SignUpType, SignInType } from "../consts/form-schema"
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
    const { userId, password } = data
    const res = await axiosInstance.post(PATH + "/sign-in", {
      userId,
      password,
    })
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
