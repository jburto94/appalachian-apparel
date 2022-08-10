import Category from "./Category"
import './Categories.scss';

const CategoryList = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map(({title, id, imageUrl}) => (
        <Category key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryList;