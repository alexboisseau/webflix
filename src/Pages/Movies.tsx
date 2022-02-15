import { FC } from 'react';

import { getAllMovies } from '../services/moviesService';

import MovieCard from '../components/MovieCard/MovieCard';
import VerticalList from '../components/VerticalList/VerticalList';

const Movies: FC = () => {
  const movies = getAllMovies();

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6">
      <h1 className="font-bold text-xl">Find the movie that you search</h1>
      <VerticalList>
        {movies.map(({ id, posterPath }) => {
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
