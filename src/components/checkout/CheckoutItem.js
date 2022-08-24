import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  ItemInfo,
  Quantity,
  Value,
  Adjustor,
  RemoveButton
} from './CheckoutItem.jsx';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, updateItemInCart } = useContext(CartContext);
  const { name, price, quantity, imageUrl } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemInfo>{name}</ItemInfo>
      <Quantity>
        <Adjustor onClick={() => updateItemInCart(item, 'increase')}>+</Adjustor>
        <Value>{quantity}</Value>
        <Adjustor onClick={() => updateItemInCart(item, 'decrease')}>-</Adjustor>
      </Quantity>
      <ItemInfo>${price}</ItemInfo>
      <RemoveButton onClick={() => removeItemFromCart(item)}>&#10006;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;