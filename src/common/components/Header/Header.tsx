import { NavLink } from 'react-router'
import s from './Header.module.css'
import {Path} from "@/common/routing/paths.ts";
import {TmdbLogo} from "@/common/components";
import clsx from 'clsx'
import {ThemeToggle} from "@/features/theme-toggle/ui/ThemeToggle.tsx";

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: Path.Movies, label: 'Category movies' },
  { to: Path.Filtered, label: 'Filtered movies' },
  { to: Path.Search, label: 'Search' },
  { to: Path.Favorites, label: 'Favorites' },
]

export const Header = () => {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavLink to={Path.Main}>
          <TmdbLogo/>
        </NavLink>
        <nav>
          <ul className={s.list}>
            {navItems.map(item => (
              <li className={s.item} key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(s.link, isActive && s.activeLink)
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle/>
      </div>
    </header>
  )
}