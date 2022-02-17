import { ChangeEvent, FC } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex justify-center">
      <input
        className="rounded px-3 py-2 text-gray-800 w-8/12"
        type="text"
        placeholder="Enter the title of a movie"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
