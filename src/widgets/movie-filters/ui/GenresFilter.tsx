import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {
  selectSelectedGenreIds,
  toggleGenre
} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from './GenresFilter.module.css'
import {Button} from "@/shared";
import type {Genre} from "@/features/genres/model/types.ts";
import clsx from "clsx";

export const GenresFilter = ({genres}: {genres: Genre[]}) => {
  const dispatch = useAppDispatch()
  const selectedId = useAppSelector(selectSelectedGenreIds)

  return (
    <div className={s.genres}>
      {genres?.map((genre) => (
        <Button
          key={genre.id}
          className={clsx(s.genreButton, selectedId.includes(genre.id) && s.active)}
          onClick={() => dispatch(toggleGenre(genre.id))}
        >{genre.name}</Button>
      ))}
    </div>
  );
};
