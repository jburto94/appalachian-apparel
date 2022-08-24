import { CartItemContainer, ItemImage, ItemInfo, Name } from './CartItem.jsx';

const CartItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;

  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemInfo>
        <Name>{name}</Name>
        <span className='price'>{quantity} x ${price}</span>
      </ItemInfo>
    </CartItemContainer>
  )
};

export default CartItem;