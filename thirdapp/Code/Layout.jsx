import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link> |<Link to="registration">Registration</Link> |
      <Link to="display">Display</Link>
      <hr />
      <Outlet />
      <hr />
      Footer Section. All Rights Reserved. www.web_name.com
    </>
  );
};

export default Layout;
