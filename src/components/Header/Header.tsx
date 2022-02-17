import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-gradient-to-t from-zinc-900 to-black flex justify-between items-center sm:py-10 py-6 2xl:px-86 xl:px-60 lg:px-40 md:px-28 sm:px-20 px-5">
      <Link to="/">
        <p className="font-bold sm:text-3xl text-2xl">WebFlix 🍿</p>
      </Link>
      <nav>
        <Link to="/">
          <p className="text-gray-300 hover:text-white hover:underline">
            Movies
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
