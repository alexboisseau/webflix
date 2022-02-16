import { FC } from 'react';
import { useParams } from 'react-router-dom';
import CategorieButton from '../components/CategorieButton/CategorieButton';
import { getCategoryById } from '../services/categoriesService';
import { getMovieById } from '../services/moviesService';
import { Category } from '../types/category';

import { Movie } from '../types/movie';

import './MovieDetail.css';

const MovieDetail: FC = () => {
  const { id } = useParams();
  let movie: Movie | null = null;
  const categories: Category[] = [];

  if (id !== undefined) {
    movie = getMovieById(parseInt(id));
    if (movie?.genreIds) {
      movie.genreIds.forEach((id) => {
        const category: Category | null = getCategoryById(id.toString());

        if (category) {
          categories.push(category);
        }
      });
    }
  }

  if (movie) {
    return (
      <>
        <img
          className="rounded MovieDetailPoster"
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
        />
        <div className="space-y-2 mt-3">
          <h2 className="font-bold text-xl">{movie.title}</h2>
          <p className="text-gray-400 text-md">
            <span className="font-bold text-gray-300">Release date :</span>{' '}
            {movie.releaseDate}
          </p>
          <p className="text-gray-400 text-md">
            <span className="font-bold text-gray-300">Duration :</span> 120
            minutes
          </p>
          <p className="font-bold text-gray-300">Categories :</p>
          <div className="flex flex-wrap">
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <CategorieButton label={category.name}></CategorieButton>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-gray-400">
            <span className="font-bold text-gray-300">Overview :</span>{' '}
            {movie.overview}
          </p>
        </div>
      </>
    );
  } else {
    return <p>Movie not found</p>;
  }
};

export default MovieDetail;
