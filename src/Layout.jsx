import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
