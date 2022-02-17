import { FC } from 'react';

const VerticalList: FC = ({ children }) => {
  return <div className="flex flex-wrap justify-center">{children}</div>;
};

export default VerticalList;
