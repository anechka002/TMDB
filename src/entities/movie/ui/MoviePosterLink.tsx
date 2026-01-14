import { Link } from "react-router";
import {MoviePoster} from "@/entities/movie/ui/MoviePoster.tsx";

type Props = {
  movieId: string | number;
  posterPath?: string | null;
  title?: string;
  className?: string;
};

export const MoviePosterLink = ({ movieId, ...rest }: Props) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <MoviePoster {...rest} variant={'card'} />
    </Link>
  );
};
