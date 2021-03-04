import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="info">
        <Navbar.Brand className="text-light" href="#home">
          Wizard Form
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
