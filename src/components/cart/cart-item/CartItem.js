import './CartItem.scss';

const CartItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-info'>
        <span className='name'>{name}</span>
        <span class='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
};

export default CartItem;