import s from './FilteredMoviesPage.module.css'
import {FiltersSidebar} from "@/widgets/movie-filters";
import {MoviesGrid} from "@/widgets/movies-grid";

export const FilteredMoviesPage = () => {
  return (
    <section className={s.page}>
      <div className={s.content}>
        <FiltersSidebar />
        <MoviesGrid />
      </div>
    </section>
  );
};
