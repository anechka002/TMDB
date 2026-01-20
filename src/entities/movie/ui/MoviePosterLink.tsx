import {Link, useLocation} from "react-router";
import {MoviePoster} from "@/entities/movie/ui/MoviePoster.tsx";

type Props = {
  movieId: string | number;
  posterPath?: string | null;
  title?: string;
  className?: string;
};

export const MoviePosterLink = ({ movieId, ...rest }: Props) => {

  const location = useLocation();
  const from = location.pathname + location.search;

  return (
    <Link to={`/movie/${movieId}`} state={{ from }}>
      <MoviePoster {...rest} variant={'card'} />
    </Link>
  );
};
