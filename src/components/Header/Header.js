import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bookstore App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/DanCarl857/bookstore-app">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/DanCarl857/bookstore-app">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
}

export default Header;