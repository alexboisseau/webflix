import { FC } from 'react';

const VerticalList: FC = ({ children }) => {
  return <div className="flex flex-wrap justify-center my-5">{children}</div>;
};

export default VerticalList;
