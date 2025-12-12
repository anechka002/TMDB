import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import s from './ThemeToggle.module.css'

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