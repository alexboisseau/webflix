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

export { getAllMovies, getMovieById };
