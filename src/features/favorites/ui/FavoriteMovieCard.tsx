import {
  selectIsFavorite,
  toggleFavorite
} from "@/features/favorites/model/favorites-slice.ts";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";

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