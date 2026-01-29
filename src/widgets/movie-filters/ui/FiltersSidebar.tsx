import s from "./FiltersSidebar.module.css";
import {GenresFilter, RatingSlider, SortSelect} from "@/widgets/movie-filters";
import {
  ResetFiltersButton
} from "@/widgets/movie-filters/ui/ ResetFiltersButton.tsx";
import type {Genre} from "@/features/genres/model/types.ts";

export const FiltersSidebar = ({genres}: {genres: Genre[]}) => {
  return (
    <div className={s.filtersColumn}>
      <aside className={s.filters}>
        <h2 className={s.filtersTitle}>Filters / Sort</h2>
        <SortSelect/>
        <RatingSlider/>
        <GenresFilter genres={genres}/>
        <ResetFiltersButton/>
      </aside>
    </div>
  );
};