import {
  MovieDataResponse,
  MoviesDataResponse,
  MovieSearchDataResponse,
} from '../types/movie';

const getAllMovies = async (): Promise<MoviesDataResponse[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch movies');
  }

  const movies = await response.json();
  return movies.results;
};

const getMoviesBySearchValue = async (
  searchValue: string,
): Promise<MoviesDataResponse[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch movies by a query');
  }

  const movies: MovieSearchDataResponse = await response.json();
  return movies.results;
};

const getMovieById = async (id: number): Promise<MovieDataResponse> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMAIN}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Error during request to fetch detail movie');
  }

  const movie = await response.json();

  return movie;
};

// const getSimilarMovies = (currentMovie: Movie): Movie[] => {
//   const movies: Movie[] = getAllMovies();
//   const result: Movie[] = [];

//   currentMovie.genreIds.forEach((genre) => {
//     const similars = movies.filter(
//       (movie) =>
//         movie.genreIds.includes(genre) &&
//         movie.id !== currentMovie.id &&
//         !result.includes(movie),
//     );
//     result.push(...similars);
//   });

//   return result;
// };

export { getAllMovies, getMovieById, getMoviesBySearchValue };
