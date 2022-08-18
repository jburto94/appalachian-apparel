import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../checkout/CheckoutItem";

import './Checkout.scss';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className='checkout-total'>Total: ${getTotal()}</span>
    </div>
  );
};

export default Checkout;