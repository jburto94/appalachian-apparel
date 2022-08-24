import { Routes, Route } from 'react-router';
import CategoriesPreview from '../../categories/categories-preview/CategoriesPreview';
import Category from '../../categories/category/Category';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;