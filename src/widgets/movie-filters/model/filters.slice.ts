import {createSlice} from "@reduxjs/toolkit";
import type {
  SortByType
} from "@/widgets/movie-filters/model/types.ts";

type FiltersState = {
  sortBy: SortByType;
  ratingFrom: number;
  ratingTo: number;
  selectedGenreIds: number[];
}

const initialState: FiltersState = {
  sortBy: 'popularity.desc',
  ratingFrom: 0,
  ratingTo: 10,
  selectedGenreIds: [],
}

export const filtersSlice = createSlice({
  name: 'movieFilters',
  initialState,
  selectors: {
    selectSortBy: (state) => state.sortBy,
    selectRatingFrom: (state) => state.ratingFrom,
    selectRatingTo: (state) => state.ratingTo,
    selectSelectedGenreIds: (state) => state.selectedGenreIds,
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
    toggleGenre: create.reducer<number>((state, action) => {
      const id = action.payload
      if(state.selectedGenreIds.includes(id)) {
        state.selectedGenreIds = state.selectedGenreIds.filter((g) => g != id)
      } else {
        state.selectedGenreIds.push(id)
      }
    }),
    resetFilters: create.reducer(() => {
      return {
        ...initialState,
        selectedGenreIds: []
      }
    })
  }),
})
export const {setSortBy, setRatingFrom, setRatingTo, toggleGenre, resetFilters} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer

export const {selectSortBy, selectRatingTo, selectRatingFrom, selectSelectedGenreIds } = filtersSlice.selectors;