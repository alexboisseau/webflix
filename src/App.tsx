import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Movie from './pages/MovieDetail';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';

const App: FC = () => {
  return (
    <Provider store={store}>
      <main className="flex flex-col justify-between w-full min-h-screen bg-zinc-900 text-white">
        <BrowserRouter>
          <div>
            <Header />
            <div className="2xl:px-86 xl:px-60 lg:px-40 md:px-28 sm:px-20 px-5">
              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </main>
    </Provider>
  );
};

export default App;
