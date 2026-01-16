import {createSlice} from "@reduxjs/toolkit";
import type {SortByType} from "@/widgets/movie-filters/model/types.ts";

type FiltersState = {
  sortBy: SortByType
}

const initialState: FiltersState = {
  sortBy: 'popularity.desc'
}

export const filtersSlice = createSlice({
  name: 'movieFilters',
  initialState,
  selectors: {
    selectSortBy: (state) => state.sortBy
  },
  reducers: (create) => ({
    setSortBy: create.reducer<SortByType>((state, action) => {
      state.sortBy = action.payload
    }),
  }),
})
export const {setSortBy} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer

export const {selectSortBy} = filtersSlice.selectors;