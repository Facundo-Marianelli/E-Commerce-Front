import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './CategoryList.css';
function CategoryList({ categories }) {
  return (
    <div id='botones'>
      {categories.map(category => (
        <Button variant="outlined" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </Button>
      ))}
    </div>
  );
}

export default CategoryList;