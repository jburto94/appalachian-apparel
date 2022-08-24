import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../cart/cart-icon/CartIcon';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';

import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import './Navigation.jsx';
import { CartContext } from '../../context/CartContext';
import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink } from './Navigation.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDisplay } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
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
          <CartIcon />
        </NavLinks>
        { cartDisplay && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;