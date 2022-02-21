import { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdiCardsHeartOutline } from '../Icons/Icons';

import './MovieCard.css';

interface MovieCardProps {
  id: number;
  posterPath: string;
  title: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, posterPath, title }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="MovieCard m-2">
      <Link to={`/movies/${id}`}>
        {posterPath && (
          <div
            className="MovieCardPoster"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
        )}
        {!posterPath && <div className="MovieCardPoster"></div>}
      </Link>
      <div className="flex items-start justify-around mt-1">
        <p className="font-bold sm:text-lg text-md w-10/12">{title}</p>
        <button>
          <MdiCardsHeartOutline onClick={() => console.log('toggle')} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
