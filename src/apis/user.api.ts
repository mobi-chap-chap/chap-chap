import { axiosInstance } from './core';
import { User } from './type/user.type';

const PATH = '/user/update';

export const UserApi = {
    async PatchProfileImg(image: File) {
        const res = await axiosInstance.patch<User>(PATH + '/profile', {
            image,
        });
        return res.data;
    },

    async PostScrapRecipe(scrap: boolean) {
        const res = await axiosInstance.post<User>(PATH + '/info', {
            scrap,
        });
        return res.data;
    },
};
