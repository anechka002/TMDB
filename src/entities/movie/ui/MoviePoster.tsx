import {IMAGE_BASE_URL} from "@/common/config";
import s from "@/entities/movie/ui/MovieCard.module.css";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";

export const MoviePoster = ({movie}: {movie: MovieItem}) => {
  return (
    <img
      src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
      alt={movie.original_title}
      className={s.moviePoster}
    />
  );
};