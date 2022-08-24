import { Link } from 'react-router-dom';
import { CategoryBoxContainer, BackgroundImage, CategoryBody, CategoryTitle, CategoryText} from './CategoryBox.jsx';

const CategoryBox = ({title, imageUrl}) => {
  return (
    <CategoryBoxContainer>
      <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
        <CategoryBody>
          <CategoryTitle>{title}</CategoryTitle>
          <Link to={`/shop/${title.toLowerCase()}`}>
            <CategoryText>Shop Now</CategoryText>
          </Link>
        </CategoryBody>
    </CategoryBoxContainer>
  );
};

export default CategoryBox;