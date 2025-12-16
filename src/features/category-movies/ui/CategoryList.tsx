import s from './CategoryList.module.css'
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";

type Props = {
  movies: MovieItem[]
}

export const CategoryList = ({movies}: Props) => {

  return (
    <section className={s.movieList}>
      <div className={s.movieCards}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </section>
  );
};