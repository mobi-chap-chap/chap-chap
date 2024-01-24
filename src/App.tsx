import GlobalStyles from "./styles/global.style";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import ScrollTop from "./layout/components/scroll-top";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyles />
      {/* <ScrollTop /> */}
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
