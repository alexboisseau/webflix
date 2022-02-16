import { FC } from 'react';

interface CategorieButtonProps {
  label: string;
}

const CategorieButton: FC<CategorieButtonProps> = ({ label }) => {
  return <p className="p-2 rounded bg-gray-800 text-white">{label}</p>;
};

export default CategorieButton;
