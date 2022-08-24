import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CheckoutItem from "../../checkout/CheckoutItem";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from './Checkout.jsx';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <CheckoutTotal>Total: ${getTotal()}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;