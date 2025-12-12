import { configureStore } from "@reduxjs/toolkit"
import { appReducer, appSlice } from "./app-slice.ts"
import { setupListeners } from "@reduxjs/toolkit/query"
import {popularApi} from "@/features/category-movies/api/popularApi.ts";

// создание store
export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [popularApi.reducerPath]: popularApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(popularApi.middleware),
})

setupListeners(store.dispatch)

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

