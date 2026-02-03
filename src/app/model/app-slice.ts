import { createSlice } from "@reduxjs/toolkit"
import type {ThemeMode} from "@/shared/types";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: "dark" as ThemeMode,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
    }),
  }),
})
export const appReducer = appSlice.reducer

export const { changeThemeModeAC } = appSlice.actions

export const { selectThemeMode } = appSlice.selectors

