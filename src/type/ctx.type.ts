import { ReactNode } from "react"

export type AuthContextProps = {
  accessToken: string
  signIn: (token: string) => Promise<void>
  signOut: () => Promise<void>
}

export type AuthProviderProps = {
  children: ReactNode
}
