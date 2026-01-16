import {useParams} from "react-router";
import s from './MovieDetailsPage.module.css'
import {MovieInfo} from "@/widgets/movie-details/movie-info";
import {MovieCast} from "@/widgets/movie-details/movie-cast";
import {SimilarMovies} from "@/widgets/movie-details/similar-movies";

export const MovieDetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  if(!movieId) return null

  return (
    <section className={s.section}>
      <div className={s.content}>
        <MovieInfo movieId={movieId} />
      </div>
      <MovieCast movieId={movieId}/>
      <SimilarMovies movieId={movieId}/>
    </section>
  );
};