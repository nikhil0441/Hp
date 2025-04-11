import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return (
      <>
        <Link to="home">Home</Link>|<Link to="about">About Us</Link>|
        <Link to="contact">Contact Us</Link>
        <hr size="4" color="red" />
        <Outlet />
        <hr size="4" color="blue" />
        www.mycompany.com all rights.
      </>
    );
}
export default Layout;