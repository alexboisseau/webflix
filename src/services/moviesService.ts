import data from '../data/data.json';
import { Movie } from '../types/movie';

const getAllMovies = (): Movie[] => {
  return data.movies;
};

const getMovieById = (id: number): Movie | null => {
  const movies = getAllMovies();
  const result = movies.filter((movie) => movie.id === id)[0];

  return result !== undefined ? result : null;
};

const getSimilarMovies = (currentMovie: Movie): Movie[] => {
  const movies: Movie[] = getAllMovies();
  const result: Movie[] = [];

  currentMovie.genreIds.forEach((genre) => {
    const similars = movies.filter(
      (movie) =>
        movie.genreIds.includes(genre) &&
        movie.id !== currentMovie.id &&
        !result.includes(movie),
    );
    result.push(...similars);
  });

  return result;
};

export { getAllMovies, getMovieById, getSimilarMovies };
