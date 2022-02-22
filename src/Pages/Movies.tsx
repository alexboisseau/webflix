import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import {
  getAllMovies,
  getMoviesBySearchValue,
} from '../services/moviesService';

import MovieCard from '../components/MovieCard/MovieCard';
import VerticalList from '../components/VerticalList/VerticalList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { MovieType } from '../types/movie';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggle } from '../store/favoriteSlice';

const Movies: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('filter') || '',
  );
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  // Redux
  const favoritesMovies = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const fetchMovies = useCallback(async () => {
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
  }, [searchValue]);

  const onSearchValueChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newValue = target.value;
    setSearchValue(newValue);
    setSearchParams(newValue !== '' ? { filter: newValue } : {});
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6 space-y-5 lg:space-y-10">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-center">
        The best platform to find a movie
      </h1>
      <SearchBar value={searchValue} onChange={(e) => onSearchValueChange(e)} />
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
                <MovieCard
                  id={id}
                  posterPath={poster_path}
                  title={title}
                  onFavClick={() => dispatch(toggle({ id }))}
                  isFavorite={favoritesMovies.includes(id)}
                />
              </div>
            );
          })}
        </VerticalList>
      )}
    </div>
  );
};

export default Movies;
