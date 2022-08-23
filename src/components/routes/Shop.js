import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import CategoryPreview from '../categories/CategoryPreview';
import './Shop.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
}

export default Shop;