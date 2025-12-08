import s from './App.module.css'
import {Header} from "@/common/components";
import {Routing} from "@/common/routing";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import type {ThemeMode} from "@/common/types";

function App() {
  const themeMode = useAppSelector(selectThemeMode)
  const dispatch = useAppDispatch();

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
    <div>
      <Header />
      <div className={s.layout}>
        <Routing/>
      </div>
    </div>
  )
}

export default App
