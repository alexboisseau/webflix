import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/moviesService';
import { Movie } from '../types/movie';

const MovieDetail: FC = () => {
  const { id } = useParams();
  let movie: Movie | null = null;

  if (id !== undefined) {
    movie = getMovieById(parseInt(id));
  }

  if (movie) {
    return (
      <>
        <img
          className="rounded"
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
          <p className="mt-3 text-justify text-gray-400">
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
