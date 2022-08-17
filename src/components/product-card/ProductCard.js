import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} />
      <div className='product-info'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItemToCart(product)}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;