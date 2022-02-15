import { FC } from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

interface MovieCardProps {
  id: number;
  posterPath: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, posterPath }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <Link to={`/movies/${id}`}>
      <div
        className="MovieCard m-2"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
    </Link>
  );
};

export default MovieCard;
