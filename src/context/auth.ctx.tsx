import React, { createContext, useContext, useEffect, useState } from 'react';
import TokenRepository from '../repositories/token-repository';
import { AuthContextProps, AuthProviderProps } from './ctx.type';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);

    // 변수가 있는지 확인하는 간단한 런타임 검사. null 이나 undefined일 경우 오류 발생
    if (!context) {
        throw new Error('useAuth는 반드시 AuthProvider와 함께 사용되어야 합니다');
    }
    return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState(TokenRepository.getToken());

    /* 
        accessToken을 왜 state로 관리 하는가
        웹 스토리지는 state가 아니므로, 로그인 로그아웃이 새로 고침이나 페이지 이동 없이
        UI 변동을 일으키기 위함
    */

    useEffect(() => {
        const token = TokenRepository.getToken();
        if (token) {
            setAccessToken(token);
            console.log(token);
        }
    }, []);

    const signIn = async (token: string) => {
        TokenRepository.setToken(token);
        setAccessToken(token);
    };

    const signOut = async () => {
        TokenRepository.removeToken();
        setAccessToken(null);
    };

    return <AuthContext.Provider value={{ accessToken, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
