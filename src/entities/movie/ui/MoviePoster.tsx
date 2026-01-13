import {IMAGE_BASE_URL, NO_POSTER_URL} from "@/common/config";
import s from "@/entities/movie/ui/MovieCard.module.css";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";

export const MoviePoster = ({movie}: {movie: MovieItem}) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}/${movie.poster_path}`
    : NO_POSTER_URL

  return (
    <img
      src={posterUrl}
      alt={movie.original_title ?? "Movie poster"}
      className={s.moviePoster}
    />
  );
};