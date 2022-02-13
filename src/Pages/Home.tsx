import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="text-center 2xl:mt-32 xl:mt-16 lg:mt-12 mt-10">
      <h1 className="text-4xl 2xl:text-7xl xl:text-5xl font-bold">
        The best platform to find a movie
      </h1>
      <h2 className="text-xl text-left font-bold 2xl:mt-32 xl:mt-16 lg:mt-12 mt-10 underline">
        Our selection of the moment
      </h2>
    </div>
  );
};

export default Home;
