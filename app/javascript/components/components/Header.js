import React, { useState } from 'react';
import { Nav, NavItem, Navbar, NavbarToggler, NavLink, NavbarBrand, NavbarText, Collapse, DropdownToggle, UncontrolledDropdown, DropdownItem, DropdownMenu } from 'reactstrap'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = props;
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  return (
    <>

      {/* <Nav>
          {logged_in &&
            <NavItem className='navBar' >
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem className='navBar'>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem className='navBar'>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav> */}

      <div>
        <Navbar
          color="dark"
          expand="md"
          dark
        >
          <NavbarBrand href="/">
            BIGBODYAPARTMENTS
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse navbar isOpen={isOpen}>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/ApartmentIndex/">
                  VIEW APARTMENTS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ApartmentNew">
                  SAVED APARTMENTS
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  MY APARTMENTS
                </DropdownToggle>
                <DropdownMenu end>
                  <NavLink href="/ApartmentIndex/">
                    ADD AN APARTMENT
                  </NavLink>
                  <NavLink href="/ApartmentIndex/">
                    EDIT MY APARTMENTS
                  </NavLink>
                  <NavLink href="/ApartmentIndex/">
                    VIEW MY APARTMENTS
                  </NavLink >
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavLink href="/ApartmentIndex/">
              SIGN IN
            </NavLink>
            <NavLink href="/ApartmentIndex/">
              SIGN UP
            </NavLink>
          </Collapse>
        </Navbar>
      </div>

    </>
  )
}
export default Header