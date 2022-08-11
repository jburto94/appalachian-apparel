import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';

import logo from '../../assets/logo.png'
import './Navigation.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Appalachian Apparel logo' className='logo' />
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;