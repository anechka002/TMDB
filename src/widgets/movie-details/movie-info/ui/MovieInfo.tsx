import s from './MovieInfo.module.css'
import {MoviePoster} from "@/entities/movie/ui/MoviePoster.tsx";
import {useLocation, useNavigate} from "react-router";
import {MovieGenres, MovieHeader} from "@/widgets/movie-details/movie-info";
import {useGetMovieDetailsQuery} from "@/entities/movie/api/movie.api.ts";

type LocationState = {from?: string}

export const MovieInfo = ({movieId}: {movieId: string}) => {

  const {data, isLoading} = useGetMovieDetailsQuery({movie_id: movieId});

  const location = useLocation()
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  const handleClickBack = () => {
    navigate(state?.from ?? '/movies/popular', {replace: true});
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