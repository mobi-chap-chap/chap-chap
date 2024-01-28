import { TokenRepository } from "../type/token.type"
const TOKEN_KEY = "access_token"

const TokenRepository: TokenRepository = {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    console.log(`Token set to localStorage: ${token}`)
  },

  getToken() {
    const token = localStorage.getItem(TOKEN_KEY)
    console.log(`Token retrieved from localStorage: ${token}`)
    return localStorage.getItem(TOKEN_KEY)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
    console.log("Token removed from localStorage")
  },
}

export default TokenRepository
