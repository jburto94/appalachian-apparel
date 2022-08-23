import CategoryBox from "../category-box/CategoryBox"
import './CategoryList.scss';

const CategoryList = ({categories}) => {
  return (
    <div className='category-list-container'>
      {categories.map(({title, id, imageUrl}) => (
        <CategoryBox key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryList;