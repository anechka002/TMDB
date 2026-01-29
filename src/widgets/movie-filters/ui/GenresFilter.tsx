import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {
  selectSelectedGenreIds,
  toggleGenre
} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from './GenresFilter.module.css'
import {Button} from "@/shared";
import type {Genre} from "@/features/genres/model/types.ts";

export const GenresFilter = ({genres}: {genres: Genre[]}) => {
  const dispatch = useAppDispatch()
  const selectedId = useAppSelector(selectSelectedGenreIds)

  return (
    <div className={s.genres}>
      {genres?.map((genre) => (
        <Button
          key={genre.id}
          className={selectedId.includes(genre.id) ? s.active : s.genreButton}
          onClick={() => dispatch(toggleGenre(genre.id))}
        >{genre.name}</Button>
      ))}
    </div>
  );
};