import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  favoritesReducer,
  favoritesSlice
} from "@/features/favorites/model/favorites-slice.ts";
import {categoryMoviesApi} from "@/features/category-movies/api/categoryMovies.api.ts";
import {
  filtersReducer,
  filtersSlice
} from "@/widgets/movie-filters/model/filters.slice.ts";
import {
  discoverMoviesApi
} from "@/features/discover-movies/api/discoverMovies.api.ts";
import {movieApi} from "@/entities/movie/api/movie.api.ts";
import {searchApi} from "@/features/search/api/search.api.ts";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [favoritesSlice.name]: favoritesReducer,
    [filtersSlice.name]: filtersReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [categoryMoviesApi.reducerPath]: categoryMoviesApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [discoverMoviesApi.reducerPath]: discoverMoviesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware, categoryMoviesApi.middleware, discoverMoviesApi.middleware, searchApi.middleware),
})

setupListeners(store.dispatch)

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

