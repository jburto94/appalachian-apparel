import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Shirts',
    },
    {
      id: 2,
      title: 'Shoes',
    },
    {
      id: 3,
      title: 'Jackets',
    },
    {
      id: 4,
      title: 'Mens',
    },
    {
      id: 5,
      title: 'Womens',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({title, id}) => (
        <div className='category-container' key={id}>
          <div className='background-image' />
          <div className='category-body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
