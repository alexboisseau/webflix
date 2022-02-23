import { createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../types/movie';

const favoritesMovies: MovieType[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoritesMovies,
  reducers: {
    toggle: (state, action) => {
      const isFavorite = state.some((movie) => {
        if (movie.id === action.payload.movie.id) {
          return true;
        }
      });

      return isFavorite
        ? state.filter((movie) => movie.id !== action.payload.movie.id)
        : [...state, action.payload.movie];
    },
  },
});

export const { toggle } = favoriteSlice.actions;

export default favoriteSlice.reducer;
