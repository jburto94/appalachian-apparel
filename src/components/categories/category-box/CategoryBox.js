import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './CategoryBox.scss';

const CategoryBox = ({title, imageUrl}) => {
  return (
    <Fragment>
        <div className='category-box-container'>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='category-body'>
              <h2>{title}</h2>
              <Link to={`/shop/${title.toLowerCase()}`}>
                <p>Shop Now</p>
              </Link>
            </div>
        </div>
    </Fragment>
  );
};

export default CategoryBox;