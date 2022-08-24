import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Button from '../../button/Button';
import CartItem from '../cart-item/CartItem';

import { CartDropdownContainer, CartItems, CartButton } from './CartDropdown.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <Link to='/checkout'>
        <CartButton>Go to checkout</CartButton>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;