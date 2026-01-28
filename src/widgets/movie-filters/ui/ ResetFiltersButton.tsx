import {useAppDispatch} from "@/shared/hooks";
import {resetFilters} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from './ResetFiltersButton.module.css'
import {usePagination} from "@/features/pagination/model/usePagination.ts";
import {Button} from "@/shared";

export const ResetFiltersButton = () => {
  const dispatch = useAppDispatch()
  const {setPage} = usePagination()

  const handleOnResetFilters = () => {
    dispatch(resetFilters())
    setPage(1)
  }

  return (
    <Button className={s.filterButton} onClick={handleOnResetFilters}>Reset filters</Button>
  );
};