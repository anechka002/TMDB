import type {
  MovieItem
} from "@/features/category-movies/api/categoryMovies.api.types.ts";
import s from './MovieCard.module.css'
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons"
import clsx from 'clsx';
import {MovieRating} from "@/entities/movie/ui/MovieRating.tsx";
import {MoviePosterLink} from "@/entities/movie/ui/MoviePosterLink.tsx";

type Props = {
  movie: MovieItem
  onToggleFavorite?: () => void
  isFavorite?: boolean
}

export const MovieCard = ({movie, onToggleFavorite, isFavorite}: Props) => {

  const className = clsx(
    s.movieDetails,
    isFavorite && s.movieDetailsVisible
  )

  return (
    <div className={s.movieCard} key={movie.id}>
      <div className={s.posterWrapper}>
        <MoviePosterLink movieId={movie.id} posterPath={movie.poster_path} title={movie.title} />
        <MovieRating rating={movie.vote_average} />
      </div>

      {onToggleFavorite && (
        <div className={className}>
          <button onClick={onToggleFavorite} className={s.iconButton}>
            {isFavorite ? <HeartFilledIcon className={s.icon}/> : <HeartIcon className={s.icon} />}
            <span className={s.tooltip}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
          </button>
        </div>
      )}

      <div className={s.movieTitle}>{movie.title}</div>
    </div>
  );
};