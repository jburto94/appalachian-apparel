import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../cart/cart-icon/CartIcon';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';

import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import './Navigation.scss';
import { CartContext } from '../../context/CartContext';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDisplay } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Appalachian Apparel logo' className='logo' />
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>SIGN IN</Link>
            )
          }
          <CartIcon />
        </div>
        { cartDisplay && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;