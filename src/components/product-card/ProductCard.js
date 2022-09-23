import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import { ProductCardContainer, Image, ProductButton, ProductInfo, Name, Price } from './ProductCard.jsx';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <ProductInfo>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductInfo>
      <ProductButton buttonType='inverted' onClick={() => addItemToCart(product)}>Add to cart</ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;