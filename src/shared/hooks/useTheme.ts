import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import type {ThemeMode} from "@/shared/types";

export const useTheme = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const dispatch = useAppDispatch();

  // при первом рендере восстановить тему
  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode ;
    if(saved && saved !== themeMode) {
      dispatch(changeThemeModeAC({themeMode: saved}));
    }
  }, [])

  // применение темы
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);
}