import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import MainPage from "../pages/main/main";
import Sign from "../pages/sign/sign";
import ScrapPage from "../pages/scrap/scraps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/chap-chap", element: <MainPage /> },
      { path: "/chap-chap/scrap", element: <ScrapPage /> },
    ],
  },
]);

export default router;
