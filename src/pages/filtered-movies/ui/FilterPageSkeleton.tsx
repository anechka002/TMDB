import {FilterSkeleton} from "@/shared/ui/Skeletons/FilterSkeleton.tsx";
import {MoviesGridSkeleton} from "@/shared";
import s from './FilteredMoviesPage.module.css'

export const FilterPageSkeleton = () => {
  return (
    <div className={s.content}>
      <FilterSkeleton/>
      <div>
        <MoviesGridSkeleton width={'150px'} count={20} height={'200px'}/>
      </div>
    </div>
  );
};