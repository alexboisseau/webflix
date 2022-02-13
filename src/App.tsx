import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <main className="w-full min-h-screen bg-zinc-900 text-white">
      <BrowserRouter>
        <Header />
        <div className="2xl:px-86 xl:px-60 lg:px-40 md:px-28 sm:px-20 px-5">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/movies" element={<div>Movies Page 📽</div>} />
            <Route path="/movies/:id" element={<div>Detail Movie Page</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
