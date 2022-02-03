import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          Student's HUB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              Notes
            </Nav.Link>
            <Nav.Link>
              Question Papers
            </Nav.Link>
            <Nav.Link>
              Signup
            </Nav.Link>
            <Nav.Link>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

