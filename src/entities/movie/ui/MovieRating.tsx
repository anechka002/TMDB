import clsx from "clsx";
import s from "@/entities/movie/ui/MovieCard.module.css";

type Props = {
  rating?: number | null;
  variant?: 'card' | 'details'
}

export const MovieRating = ({rating, variant}: Props) => {
  if (!rating) {
    return null;
  }

  const ratingClassName = clsx(
    s.ratingBadge,
    variant === 'details' && s.ratingDetails,
    rating > 7 && s.ratingGood,
    rating >= 5 && rating <= 7 && s.ratingMedium,
    rating < 5 && s.ratingBad,
  )
  return (
    <div className={ratingClassName}>{rating.toFixed(1)}</div>
  );
};