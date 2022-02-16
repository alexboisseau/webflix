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

  const result: Category = {
    id: '0',
    name: '',
  };

  if (category[0]) {
    result.id = category[0][0];
    result.name = category[0][1];

    return result;
  }

  return null;
};
