export type TokenRepository = {
  setToken(token: string): void
  getToken(): string | null
  removeToken(): void
}
