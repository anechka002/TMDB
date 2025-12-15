import s from './App.module.css'
import {Header} from "@/common/components";
import {Routing} from "@/common/routing";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import type {ThemeMode} from "@/common/types";
import {
  selectFavoritesMovies
} from "@/features/favorites/model/favorites-slice.ts";

function App() {
  const themeMode = useAppSelector(selectThemeMode)
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoritesMovies)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  // при первом рендере восстановить тему
  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode ;
    if(saved && saved !== themeMode) {
      dispatch(changeThemeModeAC({themeMode: saved}));
    }
  }, [themeMode, dispatch])

  // при изменении стейта обновлять DOM и localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <div>
      <Header />
      <div className={s.layout}>
        <Routing/>
      </div>
    </div>
  )
}

export default App
