import CategoryList from '../../components/categories/category-list/CategoryList';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 2,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 3,
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 4,
      "title": "Mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
    {
      "id": 5,
      "title": "Womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    }
  ];

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;