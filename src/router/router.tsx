import { createBrowserRouter } from "react-router-dom";
import SignInForm from "../pages/sign/in-form";
import Layout from "../layout/layout";
import MainPage from "../pages/main/main";
import ScrapPage from "../pages/scrap/scraps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInForm />,
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
