import { FC, useCallback, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import CategorieButton from '../components/CategorieButton/CategorieButton';
import { VoteAverage } from '../components/VoteAverage/VoteAverage';

import { getMovieById } from '../services/moviesService';

import { Genre, MovieDetail } from '../types/movie';

import './MovieDetail.css';

const Movie: FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fetchData = useCallback(async () => {
    if (id) {
      try {
        const movieDetail = await getMovieById(parseInt(id));
        setMovie(movieDetail);
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
  if (error) {
    console.log('No movie found for this id ...');
    return <Navigate to="/" />;
  }
  if (movie) {
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
          {/* <div>
            <HorizontalList>
              {similarsMovies.map((similarMovie) => {
                return (
                  <div key={similarMovie.id}>
                    <MovieCard
                      id={similarMovie.id}
                      posterPath={similarMovie.posterPath}
                    />
                  </div>
                );
              })}
            </HorizontalList>
          </div> */}
        </div>
      </>
    );
  } else {
    return <p>Redirection ...</p>;
  }
};

export default Movie;
