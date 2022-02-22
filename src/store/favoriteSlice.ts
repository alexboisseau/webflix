import { createSlice } from '@reduxjs/toolkit';

const favoritesMovies: number[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoritesMovies,
  reducers: {
    toggle: (state, action) =>
      state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id],
  },
});

export const { toggle } = favoriteSlice.actions;

export default favoriteSlice.reducer;
