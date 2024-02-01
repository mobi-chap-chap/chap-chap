import { FC, createContext, useContext, useEffect, useState } from "react"
import TokenRepository from "../repository/token-repository"
import { AuthApi } from "../apis/auth.api";
import { AuthProviderProps } from "../type/ctx.type";

interface AuthContextProps {
  accessToken: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  // 변수가 있는지 확인하는 간단한 런타임 검사. null 이나 undefined일 경우 오류 발생
  if (!context) {
    throw new Error("useAuth는 반드시 AuthProvider와 함께 사용되어야 합니다")
  }
  return context
}


const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = TokenRepository.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const signIn = async (token: string): Promise<void> => {
    TokenRepository.setToken(token);
    setAccessToken(token);
  };

  const signOut = async (): Promise<void> => {
    await AuthApi.SignOut();
    TokenRepository.removeToken();
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


/* 
        accessToken을 state로 관리하는 이유?
        웹 스토리지는 state가 아니므로, 로그인 로그아웃 시 새로 고침이나 페이지 이동 없이 UI 변동을 일으키기위해
*/