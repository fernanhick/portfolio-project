import styled, {keyframes} from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

const animateLinks = keyframes`
0%,100%{
opacity:1.5;
}
50%{
  opacity:0.6;

}
`;
export const NavCont = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 40px;
  max-width: 2048px;
  width: 100%;
  padding: 0 3px 0 3px;
  z-index: 999;
  box-shadow: 1px 4px 3px;

  align-items: center;
  background-color: rgba(238, 130, 238, 1);
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 889px) {
    position: absolute;
    display: block;
    top: 0;
    border-radius: 5px;
    right: 0;
    animation: ${animateLinks} 3s infinite;

    font-size: 1.8rem;
    cursor: pointer;
    color: rgba(255, 255, 255, 1);

    &:hover {
      transform: opacity(1.5);
    }
  }
`;

export const NavLogo = styled(LinkR)`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  justify-self: flex-start;

  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
export const NavA = styled.a`
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding-right: 5px;

  &:hover {
    animation: ${animateLinks} 4s infinite;
  }
  @media screen and (max-width: 889px) {
    display: none;
  }
`;
export const NavWrap = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;
export const NavMenu = styled.ul`
  text-align: center;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 889px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  color: rgba(255, 255, 255, 1);
  height: 40px;
  min-width: 60px;
  transition: all 0.2s ease-in;
  &: hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const NavLinks = styled(LinkS)`
  cursor: pointer;
  display: flex;
  padding: 0 0.5rem;
  height: 100%;
  align-items: center;
  text-decoration: none;
  &.active {
    border-bottom: 3px solid rgba(255, 255, 238, 1);
  }
`;
