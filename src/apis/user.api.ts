import { axiosInstance } from "./core";
import { User } from "../type/user.type";

// duplicate path
const USER = "/user/update";

export const UserApi = {
  async PatchProfileImg(image: FormData) {
    const res = await axiosInstance.patch<User>(USER + "/profile", {
      image,
    });
    return res.data;
  },
} 