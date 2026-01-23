import s from './App.module.css'
import {Footer, Header} from "@/shared/ui";
import {Routing} from "@/app/routing";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import type {ThemeMode} from "@/shared/types";
import {
  selectFavoritesMovies
} from "@/features/favorites/model/favorites-slice.ts";
import {ToastContainer} from "react-toastify";

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
  }, [])

  // при изменении стейта обновлять DOM и localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <div className={s.app}>
      <Header />
      <div className={s.layout}>
        <Routing/>
      </div>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App
