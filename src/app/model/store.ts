import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  favoritesReducer,
  favoritesSlice
} from "@/features/favorites/model/favorites-slice.ts";
import {moviesApi} from "@/features/category-movies/api/moviesApi.ts";
import {
  filtersReducer,
  filtersSlice
} from "@/widgets/movie-filters/model/filters.slice.ts";
import {
  discoverMoviesApi
} from "@/features/discover-movies/api/discoverMovies.api.ts";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [favoritesSlice.name]: favoritesReducer,
    [filtersSlice.name]: filtersReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [discoverMoviesApi.reducerPath]: discoverMoviesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesApi.middleware, discoverMoviesApi.middleware),
})

setupListeners(store.dispatch)

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

