import Header from "./components/Header";
import TopNav from "./components/TopNav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <TopNav />
      <Outlet/>
      <Footer/>
      
    </>
  );
};

export default Layout;
