import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CategorieButton from '../components/CategorieButton/CategorieButton';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import MovieCard from '../components/MovieCard/MovieCard';
import { VoteAverage } from '../components/VoteAverage/VoteAverage';

import { getCategoryById } from '../services/categoriesService';
import { getMovieById, getSimilarMovies } from '../services/moviesService';

import { Category } from '../types/category';
import { Movie } from '../types/movie';

import './MovieDetail.css';

const MovieDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let movie: Movie | null = null;
  const categories: Category[] = [];
  let similarsMovies: Movie[] = [];

  if (id) {
    movie = getMovieById(parseInt(id));

    if (movie) {
      similarsMovies = getSimilarMovies(movie);

      movie.genreIds.forEach((id) => {
        const category: Category | null = getCategoryById(id.toString());

        if (category) {
          categories.push(category);
        }
      });
    }
  }

  useEffect(() => {
    if (!movie) {
      navigate('/');
    }

    window.scrollTo(0, 0);
  }, [movie]);

  if (movie) {
    return (
      <>
        <div className="sm:flex sm:items-start jsm:ustify-start sm:space-x-5">
          <img
            className="rounded MovieDetailPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
            alt={movie.title}
          />
          <div className="space-y-2 mt-3 sm:mt-0">
            <h2 className="font-bold text-xl md:text-2xl xl:text-5xl">
              {movie.title}
            </h2>
            <p className="text-gray-400 text-md lg:text-md xl:text-lg">
              <span className="font-bold text-gray-300">Release date :</span>{' '}
              {movie.releaseDate}
            </p>
            <p className="text-gray-400 text-md lg:text-md xl:text-lg">
              <span className="font-bold text-gray-300">Duration :</span> 120
              minutes
            </p>
            <p className="font-bold text-gray-300 lg:text-md xl:text-lg">
              Vote average :
            </p>
            {movie.voteCount > 0 ? (
              <VoteAverage
                voteAverageValue={Math.round(movie.voteAverage / 2)}
                voteAverageCount={movie.voteCount}
              />
            ) : (
              'No votes for this moment ...'
            )}
            <p className="font-bold text-gray-300 lg:text-md xl:text-lg">
              Categories :
            </p>
            <div className="flex flex-wrap">
              {categories.map((category) => {
                return (
                  <div key={category.id}>
                    <CategorieButton label={category.name}></CategorieButton>
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
          </div>
        </div>
      </>
    );
  } else {
    return <p>Movie not found</p>;
  }
};

export default MovieDetail;
