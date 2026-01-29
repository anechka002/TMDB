import s from './FilteredMoviesPage.module.css'
import {FiltersSidebar} from "@/widgets/movie-filters";
import {MoviesGrid} from "@/widgets/movies-grid";
import {useGenresMoviesQuery} from "@/features/genres/api/genres.api.ts";
import {FilterPageSkeleton} from "@/pages/filtered-movies";

export const FilteredMoviesPage = () => {
  const { data, isLoading } = useGenresMoviesQuery()

  if (isLoading) {
    return <FilterPageSkeleton />
  }

  return (
    <section className={s.page}>
      <div className={s.content}>
        <FiltersSidebar genres={data?.genres ?? []} />
        <MoviesGrid />
      </div>
    </section>
  );
};
