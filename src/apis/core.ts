import axios from "axios"
import TokenRepository from "../repository/token-repository"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
    pair: import.meta.env.VITE_PAIR,
  },
  // 백엔드에서 refresh token을 cookie 형태로 전달
  withCredentials: true,
})

export const axiosRecipeInstance = axios.create({
  baseURL: import.meta.env.VITE_RECIPE_URL,
})

// interceptor.response 응답을 가로챔 / request: 요청
// use안에서 axiosInstance의 요청의 설정을 가져온것 -> 요청의 header에 token을 심겠다
// 이 인터셉터를 사용하면 모든 요청에 대해 설정을 추가하거나 수정할 수 있다.
axiosInstance.interceptors.request.use(function (config) {
	const token = TokenRepository.getToken();
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});
