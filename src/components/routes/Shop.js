import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from '../product-card/ProductCard';
import './Shop.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map(({id, name, price, imageUrl}) => (
        <ProductCard
          key={id}
          name={name}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
}

export default Shop;