import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import type {MovieItem} from "@/entities/movie/api/movie.api.types.ts";

type Props = {
  movies: MovieItem[]
}

export const SearchResults = ({movies}: Props) => {
  return <CategoryList movies={movies} layout={'category'}/>
};