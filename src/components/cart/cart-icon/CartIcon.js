import { useContext } from 'react';
import { ReactComponent as Icon } from '../../../assets/shopping-bag.svg';
import { CartContext } from '../../../context/CartContext';
import './CartIcon.scss';

const CartIcon = () => {
  const { cartDisplay, setCartDisplay, cartCount } = useContext(CartContext);

  const handleClick = () => {
    setCartDisplay(!cartDisplay);
  };

  return (
    <div className='cart-icon-container' onClick={handleClick}>
      <Icon className='cart-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;