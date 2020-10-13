import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">

        <NavbarBrand>
          <Link to="/">
            reactstrap
          </Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink >
                <Link to="/">
                  Home
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
                <Link to="/about">
                  About
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
                <Link to="/users">
                  Users
                </Link>
              </NavLink>
            </NavItem>


            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>Simple Text</NavbarText>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
