import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartIconContainer, CartIconSvg, ItemCount } from './CartIcon.jsx';

const CartIcon = () => {
  const { cartDisplay, setCartDisplay, cartCount } = useContext(CartContext);

  const handleClick = () => {
    setCartDisplay(!cartDisplay);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <CartIconSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;