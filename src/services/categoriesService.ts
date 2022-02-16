import data from '../data/data.json';
import { Category } from '../types/category';

const getAllCategories = () => {
  return data.genres;
};

export const getCategoryById = (categoryId: string): Category | null => {
  const categories = getAllCategories();
  const category = Object.entries(categories).filter(
    ([id]) => id === categoryId,
  );

  return category[0] ? { id: category[0][0], name: category[0][1] } : null;
};
