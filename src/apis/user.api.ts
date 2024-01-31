import { axiosInstance } from "./core";
import { User } from "../type/user.type";

// duplicate path
const USER = "/user/update";
const SCRAP = '/data';

export const UserApi = {
  // image : File ? FormData?
  async PatchProfileImg(image: File) {
    const res = await axiosInstance.patch<User>(USER + "/profile", {
      image,
    });
    return res.data;
  },

  //  <method:POST> https://topdragon.co.kr/mobithon/data/recipe?pair=2&auth=true&apiKey=mobi2nd1234
//   BODY : {
//     imageURL: string, 
//     RCP_NM: string,
//     isScrapped : boolean,
//  } 
  async PostScrapRecipe({...data}){
    const res = await axiosInstance.post<User>(SCRAP + "/recipe", data, {
      params : {
        auth: true,
      }
    });
    return res.data;
  },

  // <method: GET>
  // /data/scrap?pair=1&auth=true&parentId=8c81c030-6eb8-4f91-a06a-b42b55143922&apiKey=mobi2nd1234
  async GetScrapRecipe(scrapId: string){
    const res = await axiosInstance.get<User>(SCRAP + "/scrap",  {
      params: {
        auth: true,      
        parentId: scrapId,
      } 
    })
    return res.data;
  },

  // <method: DELETE> 
  // /data/scrap?pair=2&apiKey=mobi2nd1234&dataId=8c81c030-6eb8-4f91-a06a-b42b55143922&apiKey=mobi2nd1234
  async DeleteScrapRecipe(scrapId: string) {
    const res = await axiosInstance.delete(SCRAP + "/scrap", {
      params: {
        auth: true,
        parentId: scrapId,
      }
    })
    return res.data;
  }
};