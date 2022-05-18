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
  return (
    <>

      <div>
        <Navbar
          color="dark"
          expand="md"
          dark
        >
          <NavLink href="/">
            BIGBODYAPARTMENTS
          </NavLink>
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
                <NavLink href="/ApartmentIndex">
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
                  <NavLink href="/ApartmentNew/">
                    ADD AN APARTMENT
                  </NavLink>
                  <NavLink href="/ApartmentEdit/">
                    EDIT MY APARTMENTS
                  </NavLink>
                  <NavLink href="/ApartmentIndex/">
                    VIEW MY APARTMENTS
                  </NavLink >
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {logged_in &&
              <NavItem className='nav-link' >
                <a href={sign_out_route} >Sign Out</a>
              </NavItem>
            }
            {!logged_in &&
              <NavItem className='nav-link' >
                <a href={sign_in_route} >Sign In</a>
              </NavItem>
            }
            {!logged_in &&
              <NavItem className="nav-link" >
                <a href={new_user_route} >Sign Up</a>
              </NavItem>
            }
          </Collapse>
        </Navbar>
      </div>

    </>
  )
}
export default Header