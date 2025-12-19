import clsx from "clsx";
import s from "@/entities/movie/ui/MovieCard.module.css";

export const MovieRating = ({rating}: {rating: number}) => {

  const ratingClassName = clsx(
    s.ratingBadge,
    rating > 7 && s.ratingGood,
    rating >= 5 && rating <= 7 && s.ratingMedium,
    rating < 5 && s.ratingBad,
  )
  return (
    <div className={ratingClassName}>{rating.toFixed(1)}</div>
  );
};