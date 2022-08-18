import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from '../button/Button';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, updateItemInCart } = useContext(CartContext);
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className='checkout-item'>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p><span onClick={() => updateItemInCart(item, 'decrease')}>less</span> {quantity} <span onClick={() => updateItemInCart(item, 'increase')}>more</span></p>
      <span>${price}</span>
      <Button onClick={() => removeItemFromCart(item)}>Remove Item</Button>
    </div>
  );
};

export default CheckoutItem;