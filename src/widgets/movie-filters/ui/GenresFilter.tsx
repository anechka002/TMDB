import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {
  selectSelectedGenreIds,
  toggleGenre
} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from './GenresFilter.module.css'
import {Button} from "@/shared/ui";
import {useGenresMoviesQuery} from "@/features/genres/api/genres.api.ts";

export const GenresFilter = () => {
  const dispatch = useAppDispatch()
  const selectedId = useAppSelector(selectSelectedGenreIds)

  const { data } = useGenresMoviesQuery()

  return (
    <div className={s.genres}>
      {data?.genres?.map((genre) => (
        <Button
          key={genre.id}
          className={selectedId.includes(genre.id) ? s.active : s.genreButton}
          onClick={() => dispatch(toggleGenre(genre.id))}
        >{genre.name}</Button>
      ))}
    </div>
  );
};