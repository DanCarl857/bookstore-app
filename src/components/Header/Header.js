import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <Navbar color="light" light expand="md">
          <Link to="/">Bookstore App</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/DanCarl857/bookstore-app">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/DanCarl857/bookstore-app">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
}

export default withRouter(Header);