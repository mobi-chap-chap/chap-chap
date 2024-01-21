import { createBrowserRouter } from "react-router-dom";
import SignInForm from "../pages/sign/in-form";
import Layout from "../layout/layout";
import MainPage from "../pages/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInForm />,
  },
  {
    element: <Layout />,
    children: [{ path: "/chap-chap", element: <MainPage /> }],
  },
]);

export default router;
