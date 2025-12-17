import {NavLink} from "react-router";
import {categories} from "@/features/category-movies/model/categories.ts";
import {Path} from "@/common/routing";
import clsx from "clsx";
import s from './CategoryTabs.module.css'

export const CategoryTabs = () => {
  return (
    <div className={s.tabs}>
      {categories.map((tab) => (
        <NavLink
          key={tab.type}
          to={`${Path.Movies}/${tab.type}`}
          className={({ isActive }) =>
            clsx(s.tab, isActive && s.activeLink)
          }
        >
          {tab.tabLabel}
        </NavLink>
      ))}
    </div>
  );
};