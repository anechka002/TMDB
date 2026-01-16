import s from './FilteredMoviesPage.module.css'

import {FiltersSidebar} from "@/widgets/movie-filters";

export const FilteredMoviesPage = () => {
  return (
    <section className={s.page}>
      <div className={s.content}>
        <FiltersSidebar />
        {/*<MoviesGrid />*/}
      </div>
    </section>
  );
};