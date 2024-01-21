import { Outlet } from "react-router-dom";
import Header from "./components/header";
import ScrollTop from "./components/scroll-top";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
