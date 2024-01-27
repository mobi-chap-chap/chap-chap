import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import MainPage from "../pages/main/main";
import Sign from "../pages/sign/sign";
import ScrapPage from "../pages/scrap/scraps";
import SearchPage from "../pages/search/search";
import DetailRecipe from "../pages/detail/detail-recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/chap-chap", element: <MainPage /> },
      {
        path: "/chap-chap/recipe/:RCP_NM",
        element: <DetailRecipe />,
      },
      { path: "/chap-chap/scrap", element: <ScrapPage /> },
      { path: "/chap-chap/search", element: <SearchPage /> },
    ],
  },
]);

export default router;
