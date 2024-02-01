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
//  <method:POST> https://topdragon.co.kr/mobithon/data/recipe?pair=2&auth=true&apiKey=mobi2nd1234
//   BODY : {
//     imageURL: string, 
//     RCP_NM: string,
//     isScrapped : boolean,
//  } 

/**
 * const postLikedProduct = async (id) => {
    const res = await axiosInstance().post(PATH + `/like`, {
        prod_idx: id,
    });
    return res.data;
};
 */

