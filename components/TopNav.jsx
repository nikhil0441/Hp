import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import logo from "../images/hp.jpeg";

const TopNav = () => {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary" id="nav">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} alt="Logo" width="40" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search "
                placeholder="Search Hp.com"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button
              variant=""
              style={{
                marginLeft: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TopNav;
