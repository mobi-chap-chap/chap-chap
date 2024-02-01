import { DETAIL_END_POINT, END_POINT, SEARCH_END_POINT } from "../consts/end-point";
import { axiosInstance, axiosRecipeInstance } from "./core";
import { Info } from "../type/recipe.type";
import { User } from "../type/user.type";

/**
 * @recipeData : keyId, serviceId, dataType, startIdx, endIdx
 * @returns  res.data
 */

const SCRAP = '/data';

export const RecipeApi = {
  async PostScrapRecipe({
    recipeTitle,
    recipeImg
  } : {
    recipeTitle: string,
    recipeImg: string
  }){
    /**
     * 썬크림, 오일, 여행->화장?X 쌩얼? 여ㅐㅎㅇ-> 추억남기러 
      그냥 돈 많은 사람이네... 리조트에서 고등어꾸어먹는ㄴ 여행.. 아재파티.. 컨셉.. 황정민..컨셉..
      고등어 뭐야 ㅋㅋ
    */
    const res = await axiosInstance.post<User>(SCRAP + "/recipe/scrap", {
      recipeTitle,
      recipeImg
    }, {
      params : {
        auth: true,
      } 
    });
    return res.data;
  },

  // <method: GET>
  // /data/scrap?pair=1&auth=true&parentId=8c81c030-6eb8-4f91-a06a-b42b55143922&apiKey=mobi2nd1234
  async GetScrapRecipe({...RecipeData
  }: {
    startIdx: number;
    endIdx: number;
    scrapId: string
  }){
    const res = await axiosInstance.get<User>(SCRAP + "/scrap",  {
      params: {
        auth: true,      
        parentId: RecipeData.scrapId,
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
  },


  async getRecipe({
    ...recipeData
  }: {
    startIdx: number;
    endIdx: number;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      END_POINT.RECIPE({ ...recipeData })
    );
    return res.data;
  },
  

  async getSearchRecipe ({
    ...recipeData
  } : {
    startIdx: number;
    endIdx: number;
    RCP_NM: string;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      SEARCH_END_POINT.RECIPE({ ...recipeData })
    )
    return res.data
  },


  async getDetailRecipe({
    ...recipeData
  }: {
    startIdx: number;
    endIdx: number;
    RCP_NM: string;
  }){
    const res = await axiosRecipeInstance.get<Info>(
      DETAIL_END_POINT.RECIPE({ ...recipeData })
    );
    return res.data;
  }
};









