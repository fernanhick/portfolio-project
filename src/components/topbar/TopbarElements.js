import styled from 'styled-components';

export const TopbarCont = styled.nav`
  height: 200px;
  width: 150px;
  margin: 0;
  padding: 0;
  transform: translateX(986px) translateY(-100%);
  position: absolute;
  border-radius: 0 0 15px 15px;
  background-color: violet;
  z-index: -999;
  transition: all 0.4s ease-in;
  /* transform: ${({isTbOpen}) =>
    isTbOpen ? 'translateY(160px)' : 'translateX(160px)'}; */
`;
