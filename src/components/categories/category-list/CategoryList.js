import CategoryBox from "../category-box/CategoryBox"
import { CategoryListContainer } from './CategoryList.jsx';

const CategoryList = ({categories}) => {
  return (
    <CategoryListContainer>
      {categories.map(({title, id, imageUrl}) => (
        <CategoryBox key={id} title={title} imageUrl={imageUrl} />
      ))}
    </CategoryListContainer>
  );
};

export default CategoryList;