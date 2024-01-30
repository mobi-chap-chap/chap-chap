import { TokenRepository } from "../type/token.type"
const TOKEN_KEY = "access_token"

const TokenRepository: TokenRepository = {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  getToken() {
    const token = localStorage.getItem(TOKEN_KEY)
    return localStorage.getItem(TOKEN_KEY)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },
}

export default TokenRepository
