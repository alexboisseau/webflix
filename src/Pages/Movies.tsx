import { FC, useEffect, useState } from 'react';

import {
  getAllMovies,
  getMoviesBySearchValue,
} from '../services/moviesService';

import MovieCard from '../components/MovieCard/MovieCard';
import VerticalList from '../components/VerticalList/VerticalList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { MoviesDataResponse } from '../types/movie';

const Movies: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('filter') || '',
  );
  const [movies, setMovies] = useState<MoviesDataResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      setMovies(
        searchValue
          ? await getMoviesBySearchValue(searchValue)
          : await getAllMovies(),
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setSearchParams(searchValue !== '' ? { filter: searchValue } : {});
    fetchMovies();
  }, [searchValue]);

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6 space-y-5 lg:space-y-10">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-center">
        The best platform to find a movie
      </h1>
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {loading && <p className={'text-center text-xl'}>Loading ...</p>}
      {error && (
        <p className={'text-center text-xl'}>
          Oups ... We are sorry but something went wrong ...
        </p>
      )}
      {!loading && !error && (
        <VerticalList>
          {movies.map(({ id, poster_path, title }) => {
            return (
              <div key={id}>
                <MovieCard id={id} posterPath={poster_path} title={title} />
              </div>
            );
          })}
        </VerticalList>
      )}
    </div>
  );
};

export default Movies;
