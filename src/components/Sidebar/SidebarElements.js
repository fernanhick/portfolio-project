import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const SidebarCont = styled.nav`
  height: 100vh;
  width: 250px;

  align-items: center;
  z-index: -999;
  transition: all 0.4s ease-in;
  transform: ${({isOpen}) => (isOpen ? '' : 'translateX(-160px)')};
`;

export const SidebarWrap = styled.nav`
  height: 100%;
  display: flex;

  width: 100%; ;
`;

export const TogWrap = styled.nav`
  width: 30px;
  color: rgba(238, 130, 238, 1);
  cursor: pointer;
`;

export const Toggler = styled.nav`
  background-color: rgba(238, 130, 238, 0.3);
  width: 30px;
  height: 30px;
  border-radius: 0 30% 30% 0;
  margin: 0;
  z-index: -99;
  box-shadow: 1px 2px 3px;
  transition: all 0.25s ease-in;
`;

export const SidebarLogo = styled(LinkS)`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  justify-self: flex-start;

  align-items: center;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
export const SidebarMenu = styled.ul`
  width: 200px;
  margin: 0;
  padding: 30px 0 0 0;
  box-shadow: 1px 2px 3px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  justify-content: center;
  background-color: rgba(238, 130, 238, 0.1);
`;
export const SidebarHeader = styled.h1`
  font-size: 24px;
  margin: 0 0 20px 0;
  border-radius: 5px;
  height: 46px;
  witdh: 100%;
  color: white;
  background-color: rgba(238, 130, 238, 1);
`;
export const SidebarItem = styled.li`
  list-style: none;
  height: 46px;
  width: 100%;

  color: rgba(238, 130, 238, 0.9);
  &:hover {
    background-color: rgba(238, 130, 238, 0.13);
    border-right: solid 3px;
  }
`;
export const SidebarLink = styled(LinkS)`
  padding-left: 30px;
  height: 100%;
  justify-content: center;
`;
