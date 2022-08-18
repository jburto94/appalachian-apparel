import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, updateItemInCart } = useContext(CartContext);
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='adjustor' onClick={() => updateItemInCart(item, 'increase')}>+</span>
        <span className='value'>{quantity}</span>
        <span className='adjustor' onClick={() => updateItemInCart(item, 'decrease')}>-</span>
      </span>
      <span className='price'>${price}</span>
      <div onClick={() => removeItemFromCart(item)} className='remove-button'>&#10006;</div>
    </div>
  );
};

export default CheckoutItem;