import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

const App: FC = () => {
  console.log('API_REACT', process.env.REACT_APP_API_KEY);
  return (
    <main className="flex flex-col justify-between w-full min-h-screen bg-zinc-900 text-white">
      <BrowserRouter>
        <div>
          <Header />
          <div className="2xl:px-86 xl:px-60 lg:px-40 md:px-28 sm:px-20 px-5">
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
