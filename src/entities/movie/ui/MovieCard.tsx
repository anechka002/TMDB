import {IMAGE_BASE_URL} from "@/common/config";
import type {
  MovieItem
} from "@/features/category-movies/api/popularApi.types.ts";
import s from './MovieCard.module.css'
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons"

type Props = {
  movie: MovieItem
}

export const MovieCard = ({movie}: Props) => {
  return (
    <div className={s.movieCard} key={movie.id}>
      <div className={s.posterWrapper}>
        <img
          src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
          alt={movie.original_title}
          className={s.moviePoster}
        />
      </div>

      <div className={s.movieDetails}>
        <button className={s.iconButton}>
          <HeartIcon className={s.icon} />
          <span className={s.tooltip}>Add to favorites</span>
        </button>

        {/*<HeartFilledIcon/>*/}
      </div>

      <div className={s.movieTitle}>{movie.original_title}</div>
    </div>
  );
};