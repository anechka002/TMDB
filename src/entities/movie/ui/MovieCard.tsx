import {IMAGE_BASE_URL} from "@/common/config";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";
import s from './MovieCard.module.css'
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons"
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
  selectIsFavorite,
  toggleFavorite
} from "@/features/favorites/model/favorites-slice.ts";
import clsx from 'clsx';

type Props = {
  movie: MovieItem
}

export const MovieCard = ({movie}: Props) => {
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector(state =>
    selectIsFavorite(state, movie.id)
  );

  const rating = movie.vote_average

  const className = clsx(
    s.movieDetails,
    isFavorite && s.movieDetailsVisible
  )

  const ratingClassName = clsx(
    s.ratingBadge,
    rating > 7 && s.ratingGood,
    rating >= 5 && rating <= 7 && s.ratingMedium,
    rating < 5 && s.ratingBad,
  )

  const handleOnToggleFavorite = () => {
    dispatch(toggleFavorite(movie))
  }
  return (
    <div className={s.movieCard} key={movie.id}>
      <div className={s.posterWrapper}>
        <img
          src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
          alt={movie.original_title}
          className={s.moviePoster}
        />
        <div className={ratingClassName}>{rating.toFixed(1)}</div>
      </div>

      <div className={className}>
        <button onClick={handleOnToggleFavorite} className={s.iconButton}>
          {isFavorite ? (
              <HeartFilledIcon className={s.icon}/>
            ) : (
              <HeartIcon className={s.icon} />
            )
          }
          <span className={s.tooltip}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
        </button>
      </div>

      <div className={s.movieTitle}>{movie.original_title}</div>
    </div>
  );
};