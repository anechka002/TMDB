import type {SortByType} from "@/widgets/movie-filters/model/types.ts";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {
  selectSortBy,
  setSortBy
} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from "./SortSelect.module.css";

const SORT_OPTIONS: { label: string; value: SortByType }[] = [
  { label: 'Popularity ↓', value: 'popularity.desc' },
  { label: 'Popularity ↑', value: 'popularity.asc' },
  { label: 'Rating ↓', value: 'vote_average.desc' },
  { label: 'Rating ↑', value: 'vote_average.asc' },
  { label: 'Release date ↓', value: 'primary_release_date.desc' },
  { label: 'Release date ↑', value: 'primary_release_date.asc' },
  { label: 'Title A–Z', value: 'title.asc' },
  { label: 'Title Z–A', value: 'title.desc' },
]

export const SortSelect = () => {
  const dispatch = useAppDispatch()
  const sortBy = useAppSelector(selectSortBy)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.currentTarget.value as SortByType))
  }

  return (
    <div className={s.sortControls}>
      <label className={s.sortLabel}>
        Sort by
        <select className={s.sortSelect} value={sortBy} onChange={handleSelectChange}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

