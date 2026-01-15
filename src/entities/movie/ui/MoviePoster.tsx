import {IMAGE_BASE_URL, NO_POSTER_URL} from "@/shared/config";
import s from "@/entities/movie/ui/MovieCard.module.css";
import clsx from "clsx";
import type {PosterVariant} from "@/entities/movie/model/types.ts";

type Props = {
  posterPath?: string | null | undefined;
  title?: string;
  hoverable?: boolean;
  variant?: PosterVariant
}

export const MoviePoster = ({posterPath, title, variant = 'card'}: Props) => {

  const posterUrl = posterPath
    ? `${IMAGE_BASE_URL}/${posterPath}`
    : NO_POSTER_URL

  return (
    <img
      src={posterUrl}
      alt={title ?? "Movie poster"}
      className={clsx(
        s.moviePoster,
        variant === "card" && s.posterCard,
        variant === "details" && s.posterDetails,
      )}
    />
  );
};