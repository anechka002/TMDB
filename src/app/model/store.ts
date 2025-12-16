import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  favoritesReducer,
  favoritesSlice
} from "@/features/favorites/model/favorites-slice.ts";
import {moviesApi} from "@/features/category-movies/api/moviesApi.ts";

// создание store
export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [favoritesSlice.name]: favoritesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesApi.middleware),
})

setupListeners(store.dispatch)

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

