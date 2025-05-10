import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
