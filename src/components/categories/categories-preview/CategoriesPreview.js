import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../../context/CategoriesContext';
import CategoryPreview from '../category-preview/CategoryPreview';
import { CategoriesPreviewContainer } from './CategoriesPreview.jsx';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </CategoriesPreviewContainer>
  );
}

export default CategoriesPreview;