import { FC } from 'react';

const HorizontalList: FC = ({ children }) => {
  return <div className="flex overflow-x-scroll">{children}</div>;
};

export default HorizontalList;
