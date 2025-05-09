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
import logo from "../images/hp.jpeg";

const TopNav = () => {
  const cards = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            <NavDropdown title="Products">
              <NavDropdown.Item as={NavLink} to="/laptop">
                Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pendrive">
                Pendrive
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/printers">
                Printers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/bags">
                HP Bags
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/explore" className="nav-link">
              Explore
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/support" className="nav-link">
              Support
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Hp.com"
              className="me-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div id="header" style={{ marginLeft: "10px" }}>
            <FaShoppingCart
              onClick={() => navigate("/addtocard")}
              style={{ cursor: "pointer" }}
            />
            <p className="card_length">{cards.length}</p>
          </div>
          <Button
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
  );
};

export default TopNav;
