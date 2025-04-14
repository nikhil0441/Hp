import Layout from "./Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Servies from "./Pages/Servies";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Employee Management
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/servies">
                {" "}
                {/* Fixed typo */}
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/insert">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="/display">
                Display
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="servies" element={<Servies />} /> {/* Fixed typo */}
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
