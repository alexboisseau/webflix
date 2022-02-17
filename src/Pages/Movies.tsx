import { FC, useEffect, useState } from 'react';

import { getAllMovies } from '../services/moviesService';

import MovieCard from '../components/MovieCard/MovieCard';
import VerticalList from '../components/VerticalList/VerticalList';
import { SearchBar } from '../components/SearchBar/SearchBar';

const Movies: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const movies = getAllMovies();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue]);

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6">
      <h1 className="font-bold text-xl">Find the movie that you search</h1>
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <VerticalList>
        {filteredMovies.map(({ id, posterPath }) => {
          return (
            <div key={id}>
              <MovieCard id={id} posterPath={posterPath} />
            </div>
          );
        })}
      </VerticalList>
    </div>
  );
};

export default Movies;
