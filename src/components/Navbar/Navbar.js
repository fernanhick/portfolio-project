import {Github} from '@styled-icons/boxicons-logos';
import {Menu} from '@styled-icons/boxicons-regular/Menu';
import React from 'react';
import {
  MobileIcon,
  NavA,
  NavCont,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavWrap,
} from './NavbarElements';
function Navbar({toggleTb}) {
  return (
    <>
      <NavCont>
        <NavWrap>
          <NavLogo>Nav Design</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Social</NavLinks>
            </NavItem>
          </NavMenu>
          <NavA id='anchor' href='https://github.com/fernanhick'>
            <Github size='32px' title='Github' />
          </NavA>
          <MobileIcon>
            <Menu size='32px' onClick={toggleTb} />
          </MobileIcon>
        </NavWrap>
      </NavCont>
    </>
  );
}

export default Navbar;
