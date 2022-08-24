import { useNavigate } from 'react-router-dom';
import { CategoryBoxContainer, BackgroundImage, CategoryBody, CategoryTitle, CategoryText} from './CategoryBox.jsx';

const CategoryBox = ({title, imageUrl}) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/shop/${title.toLowerCase()}`);
  
  return (
    <CategoryBoxContainer onClick={navigateHandler}>
      <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
        <CategoryBody>
          <CategoryTitle>{title}</CategoryTitle>
          <CategoryText>Shop Now</CategoryText>
        </CategoryBody>
    </CategoryBoxContainer>
  );
};

export default CategoryBox;