import { MovieType } from '../types/movie';

export const TOGGLE_FAVORITE_MOVIE = 'TOGGLE_FAVORITE_MOVIE';

const favoritesMovies: MovieType[] = [];

interface FavoriteMovieAction {
  type: string;
  payload: string;
}

export const FavoriteReducer = (
  state = favoritesMovies,
  action: FavoriteMovieAction,
) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_MOVIE:
      console.log('toggle here bro');
      return state;
    default:
      return state;
  }
};
