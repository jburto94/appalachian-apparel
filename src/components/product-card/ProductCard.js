import Button from '../button/Button';
import './ProductCard.scss';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} />
      <div className='product-info'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  );
};

export default ProductCard;