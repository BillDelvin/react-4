import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HOME, COUNT, COUNT_REDUX } from "../router";

const Navs = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          HOC
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={HOME} className="nav-link">
              Home
            </NavLink>
            <NavLink to={COUNT} className="nav-link">
              Count
            </NavLink>
            <NavLink to={COUNT_REDUX} className="nav-link">
              Count Redux
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
