import type {MovieItem} from "@/features/category-movies/api/moviesApi.types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {loadFavoritesFromStorage} from "@/shared/lib";

type FavoritesState = {
  favoritesMovies: MovieItem[];
};

const initialState: FavoritesState = {
  favoritesMovies: loadFavoritesFromStorage(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  selectors: {
    // селектор: этот фильм в избранном?
    selectIsFavorite: (state, movieId: number) => {
      return state.favoritesMovies.some(m => m.id === movieId)
    },
    // весь список избранных (например, для страницы Favorites)
    selectFavoritesMovies: (state) => state.favoritesMovies
  },
  reducers: (create) => ({
    // action
    toggleFavorite: create.reducer<MovieItem>((state, action) => {
      const newMovie = state.favoritesMovies.some((el) => el.id === action.payload.id)
      if(newMovie) {
        state.favoritesMovies = state.favoritesMovies.filter(m => m.id !== action.payload.id)
      } else {
        state.favoritesMovies.push(action.payload)
      }
    }),
  })
})

export const favoritesReducer = favoritesSlice.reducer

export const {toggleFavorite} = favoritesSlice.actions

export const {selectIsFavorite, selectFavoritesMovies} = favoritesSlice.selectors