import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import s from './ThemeToggle.module.css'
import {useAppDispatch, useAppSelector} from "@/shared/hooks";

export const ThemeToggle = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    const next = themeMode === 'light' ? 'dark' : 'light'
    dispatch(changeThemeModeAC({themeMode: next}))
  }

  return (
    <button className={s.btn} onClick={handleToggle}>
      {themeMode === 'light' ? '🌙' : '☀️'}
    </button>
  );
};