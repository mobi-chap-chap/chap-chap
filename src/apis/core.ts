import axios from 'axios';
import TokenRepository from '../repositories/token-repository';
import { Recipe } from './type/recipe.type';
import { END_POINT } from '../consts/end-point';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOBI_TOKEN}`,
    },
    withCredentials: true,
});

// 인증키서비스명/요청파일타입/요청시작위치/요청종료위치
export const axiosRecipeInstance = axios.create({
    baseURL: import.meta.env.VITE_RECIPE_URL,
});



// interceptor.response 응답을 가로챔 / request: 요청
// use안에서 axiosInstance의 요청의 설정을 가져온것 -> 요청의 header에 token을 심겠다
axiosInstance.interceptors.request.use(function (config) {
    const token = TokenRepository.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
