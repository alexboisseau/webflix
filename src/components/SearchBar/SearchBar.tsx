import { ChangeEvent, FC } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      className="rounded px-3 py-1 text-gray-800"
      type="text"
      placeholder="Search a movie"
      value={value}
      onChange={onChange}
    />
  );
};
