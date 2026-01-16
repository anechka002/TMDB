import {
  useGetSimilarMoviesQuery
} from "@/features/category-movies/api/moviesApi.ts";
import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import s from "@/widgets/movie-details/movie-cast/ui/MovieCast.module.css";

export const SimilarMovies = ({movieId}: {movieId: string}) => {

  const {data} = useGetSimilarMoviesQuery({movie_id: movieId});

  if (!data || data.results.length === 0) return null;

  return (
    <section>
      <div className={s.header}>
        <h2 className={s.title}>Similar Movies</h2>
      </div>
      <CategoryList movies={data.results.slice(0,6)}/>
    </section>
  );
};