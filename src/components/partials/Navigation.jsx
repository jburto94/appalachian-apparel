import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px 25px;
  width: 50%;

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 200px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: black;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;