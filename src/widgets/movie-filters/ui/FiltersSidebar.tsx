import s from "./FiltersSidebar.module.css";
import {GenresFilter, RatingSlider, SortSelect} from "@/widgets/movie-filters";
import {
  ResetFiltersButton
} from "@/widgets/movie-filters/ui/ResetFiltersButton.tsx";
import {useGenresMoviesQuery} from "@/features/genres/api/genres.api.ts";
import {resetFilters} from "@/widgets/movie-filters/model/filters.slice.ts";
import {useAppDispatch} from "@/shared/hooks";
import {usePagination} from "@/features/pagination/model/usePagination.ts";

export const FiltersSidebar = () => {
  const { data } = useGenresMoviesQuery()

  const dispatch = useAppDispatch()
  const {setPage} = usePagination()

  const handleOnResetFilters = () => {
    dispatch(resetFilters())
    setPage(1)
  }

  return (
    <div className={s.filtersColumn}>
      <aside className={s.filters}>
        <h2 className={s.filtersTitle}>Filters / Sort</h2>
        <SortSelect/>
        <RatingSlider/>
        <GenresFilter genres={data?.genres ?? []} />
        <ResetFiltersButton handleOnResetFilters={handleOnResetFilters}/>
      </aside>
    </div>
  );
};
