import {
  selectIsFavorite,
  toggleFavorite
} from "@/features/favorites/model/favorites-slice.ts";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";
import type {MovieItem} from "@/entities/movie/api/movie.api.types.ts";

export const FavoriteMovieCard = ({movie}: {movie: MovieItem}) => {
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector(state =>
    selectIsFavorite(state, movie.id)
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(movie))
  }

  return (
    <MovieCard movie={movie} onToggleFavorite={handleToggleFavorite} isFavorite={isFavorite} />
  );
};