import { MovieDetailType, MovieType } from '../types/movie';

const getAllMovies = async (): Promise<MovieType[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch movies');
  }

  const data = await response.json();
  return data.results;
};

const getMoviesBySearchValue = async (
  searchValue: string,
): Promise<MovieType[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch movies by a query');
  }

  const data = await response.json();
  return data.results;
};

const getMovieById = async (id: number): Promise<MovieDetailType> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch detail movie');
  }

  const movie = await response.json();

  return movie;
};

const getSimilarMovies = async (id: number): Promise<MovieType[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch similar movies');
  }

  const data = await response.json();
  return data.results;
};

export { getAllMovies, getMovieById, getMoviesBySearchValue, getSimilarMovies };
