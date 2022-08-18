import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../checkout/CheckoutItem";


const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Checkout;