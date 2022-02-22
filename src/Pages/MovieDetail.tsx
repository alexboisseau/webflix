import { FC, useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import CategorieButton from '../components/CategorieButton/CategorieButton';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import MovieCard from '../components/MovieCard/MovieCard';
import { VoteAverage } from '../components/VoteAverage/VoteAverage';

import { getMovieById, getSimilarMovies } from '../services/moviesService';
import { toggle } from '../store/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import { Genre, MovieType, MovieDetailType } from '../types/movie';

import './MovieDetail.css';

const Movie: FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  const [similarMovies, setSimilarMovies] = useState<MovieType[]>([]);

  // Redux
  const favoritesMovies = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fetchData = useCallback(async () => {
    if (id) {
      try {
        const movieDetail = await getMovieById(parseInt(id));
        const similarMovies = await getSimilarMovies(parseInt(id));

        setMovie(movieDetail);
        setSimilarMovies(similarMovies);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p>Loading ...</p>;
  if (movie && !error) {
    return (
      <>
        <div className="sm:flex sm:items-start jsm:ustify-start sm:space-x-5">
          <img
            className="rounded MovieDetailPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="space-y-2 mt-3 sm:mt-0">
            <h2 className="font-bold text-xl md:text-2xl xl:text-5xl">
              {movie.title}
            </h2>
            <button
              className={`px-2 py-1 border ${
                !favoritesMovies.includes(movie.id)
                  ? 'hover:border-yellow-300 hover:text-yellow-300'
                  : 'hover:border-red-600 hover:text-red-600'
              } rounded`}
              onClick={() => dispatch(toggle({ id: movie.id }))}
            >
              {!favoritesMovies.includes(movie.id) && (
                <span>Add on your favorite</span>
              )}
              {favoritesMovies.includes(movie.id) && (
                <span>Remove from your favorite</span>
              )}
            </button>
            <p className="text-gray-400 text-md lg:text-md xl:text-lg">
              <span className="font-bold text-gray-300">Release date :</span>{' '}
              {movie.release_date}
            </p>
            <p className="text-gray-400 text-md lg:text-md xl:text-lg">
              <span className="font-bold text-gray-300">Duration :</span>{' '}
              {movie.runtime} minutes
            </p>
            <p className="font-bold text-gray-300 lg:text-md xl:text-lg">
              Vote average :
            </p>
            {movie.vote_count > 0 ? (
              <VoteAverage
                voteAverageValue={Math.round(movie.vote_average / 2)}
                voteAverageCount={movie.vote_count}
              />
            ) : (
              'No votes for this moment ...'
            )}
            <p className="font-bold text-gray-300 lg:text-md xl:text-lg">
              Categories :
            </p>
            <div className="flex flex-wrap">
              {movie.genres.map((genre: Genre) => {
                return (
                  <div key={genre.id}>
                    <CategorieButton label={genre.name}></CategorieButton>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <p className="lg:mt-7 mt-3 text-gray-400 xl:text-lg">
            <span className="font-bold text-gray-300">Overview :</span>{' '}
            {movie.overview}
          </p>
          <p className="lg:mt-7 mt-3 text-gray-400 xl:text-lg">
            <span className="font-bold text-gray-300">Similary content :</span>{' '}
          </p>
          <div>
            <HorizontalList>
              {similarMovies.map((similarMovie) => {
                return (
                  <div key={similarMovie.id}>
                    <MovieCard
                      id={similarMovie.id}
                      posterPath={similarMovie.poster_path}
                      title={similarMovie.title}
                      onFavClick={() =>
                        dispatch(toggle({ id: similarMovie.id }))
                      }
                      isFavorite={favoritesMovies.includes(similarMovie.id)}
                    />
                  </div>
                );
              })}
            </HorizontalList>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Movie;
