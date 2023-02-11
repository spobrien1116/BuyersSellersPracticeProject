import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function AppNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light" className="p-2">
        {/* <Container> */}
        <Navbar.Brand as={Link} to={"/shop-home"} href>
          WeTradeStuff.com
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/about-me"}>
            About Me
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to={"/cart-page"}>
            Cart
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default AppNavbar;
