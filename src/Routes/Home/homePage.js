import CategoryList from '../../Components/CategoryList/CategoryList';
import data from '../../Data/data.json';

function HomePage() {
  return (
    <div>
      <h1>Categoria</h1>
      <CategoryList categories={data.categories} />
    </div>
  );
}

export default HomePage;
