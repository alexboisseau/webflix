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

  return (
    <Link to={`/movies/${id}`}>
      <div className="MovieCard m-2">
        {posterPath && (
          <div
            className="MovieCardPoster"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
        )}
        {!posterPath && <div className="MovieCardPoster"></div>}
        <p className="font-bold sm:text-lg text-md mt-1">{title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
