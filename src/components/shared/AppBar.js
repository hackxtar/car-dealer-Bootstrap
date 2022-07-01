import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./AppBar.scss";

const Logo = () => {
  return (
    <div className="navbar-logo">
      <span>CAR</span>
      <b>DEALER</b>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="float-right navbar-menu">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};

const AppBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Menu />
      </Container>
    </Navbar>
  );
};

export default AppBar;
