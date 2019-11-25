import React, { useState } from 'react';
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
  
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <center>
      <Navbar color="success" light expand="md">
        <NavbarBrand href="/"><img src = "https://cdn2.iconfinder.com/data/icons/basic-4/512/home-512.png" width ="40px"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/notHome/"><img src = "https://cdn1.iconfinder.com/data/icons/real-estate-189/24/action-denied-disable-do-house-estate-home-deny-not-enter-real-512.png" width = "30px"></img></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://ikhromwicaksono-git.github.io/netflix-kw.github.io/"><img src ="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" width = "75px"></img></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href ="https://purwadhika.com/">
                    Option 1
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href ="https://www.instagram.com/purwadhikastartupschool/?hl=id">
                    Option 2
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
      </center>
    </div>
  );
}

export default Example;
