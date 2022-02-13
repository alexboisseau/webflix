import { FC } from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import VerticalList from '../components/VerticalList/VerticalList';

import data from '../data/data.json';

const Movies: FC = () => {
  const movies = data.movies;

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6">
      <h1 className="font-bold text-xl">Find the movie that you search</h1>

      {/* Search Bar */}
      {/* Movies List */}
      <VerticalList>
        {movies.map(({ id, poster_path }) => {
          return (
            <div key={id}>
              <MovieCard key={id} posterPath={poster_path} />
            </div>
          );
        })}
      </VerticalList>
    </div>
  );
};

export default Movies;
