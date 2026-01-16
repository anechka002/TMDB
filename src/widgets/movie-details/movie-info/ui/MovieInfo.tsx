import s from './MovieInfo.module.css'
import {
  useGetMovieDetailsQuery
} from "@/features/category-movies/api/moviesApi.ts";
import {MoviePoster} from "@/entities/movie/ui/MoviePoster.tsx";
import {useNavigate} from "react-router";
import {MovieGenres, MovieHeader} from "@/widgest/movie-details/movie-info";

export const MovieInfo = ({movieId}: {movieId: string}) => {

  const {data, isLoading} = useGetMovieDetailsQuery({movie_id: movieId});

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1)
  }

  if (isLoading || !data) return null;

  return (
    <>
      <div className={s.posterCol}>
        <MoviePoster
          posterPath={data.poster_path}
          title={data.title}
          variant={'details'}
        />
      </div>
      <div className={s.details}>
        <MovieHeader
          onBack={handleClickBack}
          title={data.title}
          releaseDate={data.release_date}
          rating={data.vote_average}
          runtime={data.runtime}
        />
        <p className={s.text}>{data.overview}</p>
        <MovieGenres genres={data.genres} />
      </div>
    </>
  );
};