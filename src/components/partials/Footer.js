import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import { CartContext } from '../../context/CartContext';
import { FooterContainer, LogoContainer, Logo, NavLinks, NavLink } from './Footer.jsx';

const Footer = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <FooterContainer>
        <LogoContainer to='/'>
          <Logo src={logo} alt='Appalachian Apparel logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )
          }
        </NavLinks>
      </FooterContainer>
      <Outlet />
    </Fragment>
  );
};

export default Footer;