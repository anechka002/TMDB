import {useParams} from "react-router";
import {
  MovieInfo
} from "@/features/category-movies/movie-details/ui/movieInfo/MovieInfo.tsx";
import {
  MovieCast
} from "@/features/category-movies/movie-details/ui/MovieCast.tsx";
import {
  SimilarMovies
} from "@/features/category-movies/movie-details/ui/SimilarMovies.tsx";
import s from './MovieDetailsPage.module.css'

export const MovieDetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  if(!movieId) return null

  return (
    <section className={s.section}>
      <div className={s.content}>
        <MovieInfo movieId={movieId} />
      </div>
      <MovieCast/>
      <SimilarMovies/>
    </section>
  );
};