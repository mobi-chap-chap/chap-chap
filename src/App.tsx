import GlobalStyles from "./style/global.style"
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot } from "recoil"
import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import AuthProvider from "./context/auth.ctx"

function App() {
  const queryClient = new QueryClient()
  return (
    <AuthProvider>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
