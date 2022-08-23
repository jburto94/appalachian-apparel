import { Link } from 'react-router-dom';
import ProductCard from '../../product-card/ProductCard';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>
          <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products
            .filter((_, idx) => idx < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;