import {createSlice} from "@reduxjs/toolkit";
import type {SortByType} from "@/widgets/movie-filters/model/types.ts";

type FiltersState = {
  sortBy: SortByType;
  ratingFrom: number;
  ratingTo: number;
}

const initialState: FiltersState = {
  sortBy: 'popularity.desc',
  ratingFrom: 0,
  ratingTo: 10,
}

export const filtersSlice = createSlice({
  name: 'movieFilters',
  initialState,
  selectors: {
    selectSortBy: (state) => state.sortBy,
    selectRatingFrom: (state) => state.ratingFrom,
    selectRatingTo: (state) => state.ratingTo,
  },
  reducers: (create) => ({
    setSortBy: create.reducer<SortByType>((state, action) => {
      state.sortBy = action.payload
    }),
    setRatingFrom: create.reducer<number>((state, action) => {
      state.ratingFrom = action.payload
    }),
    setRatingTo: create.reducer<number>((state, action) => {
      state.ratingTo = action.payload
    }),
    resetFilters: create.reducer(() => {
      return initialState
    })
  }),
})
export const {setSortBy, setRatingFrom, setRatingTo} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer

export const {selectSortBy, selectRatingTo, selectRatingFrom} = filtersSlice.selectors;