import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  padding: 15px 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  position: absolute;
  bottom: 0;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px 25px;
`;

export const Logo = styled.img`
  height: 100%;
  width: 200px;
  max-width: 75%;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
`;