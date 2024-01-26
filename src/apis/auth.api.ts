import { axiosInstance } from "./core";
import { User } from "./user.type";

const PATH = "/user";

export const AuthApi = {
  async SignUp(userId: string, password: string) {
    const res = await axiosInstance.post<User>(PATH + "sign-up", {
      userId,
      password,
    });
    return res.data;
  },
  async SignIn(userId: string, password: string) {
    const res = await axiosInstance.post<User>(PATH + "sign-in", {
      userId,
      password,
    });
    return res.data;
  },
  async SignOut() {
    const res = await axiosInstance.post<User>(PATH + "sin-out");
    return res.data;
  },
};
