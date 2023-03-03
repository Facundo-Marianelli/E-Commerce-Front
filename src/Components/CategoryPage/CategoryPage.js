import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data.json';

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const categoryData = data.categories.find(cat => cat.id === Number(id));
    setCategory(categoryData);
  }, [id]);

  if (!category) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {category.products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
