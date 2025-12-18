import s from './CategoryList.module.css'
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";
import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";
import clsx from "clsx";
import type {CategoryLayout} from "../model/layout";

type Props = {
  movies: MovieItem[]
  layout?: CategoryLayout; // доп.класс именно для grid-контейнера gridMain / gridCategory
}

export const CategoryList = ({movies, layout = 'main'}: Props) => {

  const className = clsx(
    s.movieCards,
    layout === 'main' && s.gridMain,
    layout === 'category' && s.gridCategory,
  )

  return (
    <section className={s.movieList}>
      <div className={className}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </section>
  );
};