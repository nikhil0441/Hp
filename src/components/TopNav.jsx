import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../images/hp.jpeg";
import "../css/Style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TopNav = () => {
  const cards = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // New state to check login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Check login token from localStorage
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const formattedQuery = searchQuery.trim().toLowerCase();

    const routeMap = {
      laptop: "/laptop",
      pendrive: "/pendrive",
      printer: "/printers",
      printers: "/printers",
      bag: "/bags",
      bags: "/bags",
    };

    const foundRoute = Object.entries(routeMap).find(([key]) =>
      formattedQuery.includes(key)
    );

    if (foundRoute) {
      navigate(foundRoute[1]);
    } else {
      alert("Product not found");
    }

    setSearchQuery("");
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Redirect to login
  };

  return (
    <Navbar
      data-aos="fade-down"
      expand="lg"
      className="bg-body-tertiary justify-content-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand className="mx-3">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="mx-auto d-flex align-items-center gap-3">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavDropdown
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              title={<span className="nav-link">Products</span>}
              id="products-dropdown"
              className="no-caret"
            >
              <NavDropdown.Item as={NavLink} to="/laptop">
                Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pendrive">
                Pendrive
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/printers">
                Printers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/bags">
                HP Bags
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/explore" className="nav-link">
              Explore
            </NavLink>

            <NavDropdown
              show={showSupportDropdown}
              onMouseEnter={() => setShowSupportDropdown(true)}
              onMouseLeave={() => setShowSupportDropdown(false)}
              title={<span className="nav-link">Support</span>}
              id="support-dropdown"
              className="no-caret"
            >
              <NavDropdown.Item as={NavLink} to="/faqs">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/live-chat">
                Live Chat
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form
            className="d-flex align-items-center mx-3"
            onSubmit={handleSearch}
          >
            <Form.Control
              type="search"
              placeholder="Search Hp.com"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>

          <div className="d-flex align-items-center gap-3 mx-3">
            <div id="header" className="d-flex align-items-center">
              <FaShoppingCart
                onClick={() => navigate("/addtocard")}
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
              />
              <p className="card_length mb-0 ms-1">{cards.length}</p>
            </div>

            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
