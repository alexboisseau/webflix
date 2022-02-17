import { FC, ReactElement } from 'react';
import { IcRoundStar, IcRoundStarBorder } from '../Icons/Icons';

interface VoteAverageProps {
  voteAverageValue: number;
  voteAverageCount: number;
}

export const VoteAverage: FC<VoteAverageProps> = ({
  voteAverageValue,
  voteAverageCount,
}) => {
  const getStars = (value: number): ReactElement[] => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(i > value ? <IcRoundStarBorder /> : <IcRoundStar />);
    }

    return result;
  };

  return (
    <div className="flex items-center">
      {getStars(voteAverageValue).map((star, index) => {
        return <div key={index}>{star}</div>;
      })}
      ({voteAverageCount} votes)
    </div>
  );
};
