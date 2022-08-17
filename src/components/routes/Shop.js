import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from '../product-card/ProductCard';
import './Shop.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Shop;