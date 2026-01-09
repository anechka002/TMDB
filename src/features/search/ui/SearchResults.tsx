import type {
  MovieItem
} from "@/features/category-movies/api/moviesApi.types.ts";
import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";

type Props = {
  movies: MovieItem[]
}

export const SearchResults = ({movies}: Props) => {
  return <CategoryList movies={movies} layout={'category'}/>
};