import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  favoritesReducer,
  favoritesSlice
} from "@/features/favorites/model/favorites-slice.ts";
import {
  filtersReducer,
  filtersSlice
} from "@/widgets/movie-filters/model/filters.slice.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [favoritesSlice.name]: favoritesReducer,
    [filtersSlice.name]: filtersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

