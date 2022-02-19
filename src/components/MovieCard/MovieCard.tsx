import { FC } from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

interface MovieCardProps {
  id: number;
  posterPath: string;
  title: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, posterPath, title }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  if (!posterPath) {
    return (
      <Link to={`/movies/${id}`}>
        <div className="MovieCard m-2 flex text-center items-center">
          <p className="font-bold text-xl">{title}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={`/movies/${id}`}>
        <div
          className="MovieCard m-2"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
      </Link>
    );
  }
};

export default MovieCard;
