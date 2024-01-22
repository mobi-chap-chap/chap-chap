import GlobalStyles from "./styles/global.style";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
