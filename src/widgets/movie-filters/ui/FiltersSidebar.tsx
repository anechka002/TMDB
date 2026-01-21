import s from "./FiltersSidebar.module.css";
import {RatingSlider, SortSelect} from "@/widgets/movie-filters";

export const FiltersSidebar = () => {
  return (
    <div className={s.filtersColumn}>
      <aside className={s.filters}>
        <h2 className={s.filtersTitle}>Filters / Sort</h2>
        <SortSelect/>
        <RatingSlider/>
      </aside>
    </div>
  );
};