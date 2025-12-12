import {
  useFetchPopularMoviesQuery
} from "@/features/category-movies/api/popularApi.ts";
import s from './CategoryList.module.css'
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";

export const CategoryList = () => {
  const {data} = useFetchPopularMoviesQuery()

  return (
    <section className={s.movieList}>
      <div className={s.movieCards}>
        {data?.results.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </section>
  );
};