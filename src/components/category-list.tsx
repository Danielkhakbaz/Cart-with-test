import { useEffect } from "react";
import { fetchCategories } from "src/store/category-slice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.list);
  const loading = useAppSelector((state) => state.category.loading);
  const error = useAppSelector((state) => state.category.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Category List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {categories!.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
