import { FC, useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import VerticalList from '../components/VerticalList/VerticalList';
import { toggle } from '../store/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Favorites: FC = () => {
  // Redux
  const favoritesMovies = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(favoritesMovies);

  useEffect(() => {
    const movies = favoritesMovies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    );
    setFilteredMovies(movies);
  }, [searchValue, favoritesMovies]);

  useEffect(() => {
    setFilteredMovies(favoritesMovies);
  }, [favoritesMovies]);

  return (
    <div className="xl:mt-16 lg:mt-12 mt-6 space-y-5 lg:space-y-10">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-center">
        Your favorites movies
      </h1>
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <VerticalList>
        {filteredMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard
                id={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                onFavClick={() => {
                  dispatch(toggle({ movie }));
                }}
                isFavorite={filteredMovies.some(
                  (favoriteMovie) => favoriteMovie.id === movie.id,
                )}
              />
            </div>
          );
        })}
      </VerticalList>
    </div>
  );
};

export default Favorites;
