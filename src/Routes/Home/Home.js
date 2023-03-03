import CategoryList from "../../Components/CategoryList/CategoryList";
import data from "../../Data/data.json"
import ProductList from "../../Components/Product/Product";
function HomePage() {
  return (
    <div>
      <h1>Categorias:</h1>
      <CategoryList categories={data.categories} />
      <ProductList />
    </div>
  );
}

export default HomePage;
