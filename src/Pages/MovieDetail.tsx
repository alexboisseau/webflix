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
      <div className="xl:mt-16 lg:mt-12 mt-6">
        <h1 className="font-bold text-xl">Detail for {movie.title}</h1>
      </div>
    );
  } else {
    return <p>Movie not found</p>;
  }
};

export default MovieDetail;
