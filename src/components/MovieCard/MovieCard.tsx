import { FC } from 'react';

import './MovieCard.css';

interface MovieCardProps {
  posterPath: string;
}

const MovieCard: FC<MovieCardProps> = ({ posterPath }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div
      className="MovieCard m-2"
      style={{ backgroundImage: `url(${imageURL})` }}
    ></div>
  );
};

export default MovieCard;
