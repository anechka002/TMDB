import {useMemo} from "react";
import {POPULAR_BACKDROP_SEED} from "@/shared/lib/randomSeed.ts";
import {
  useFetchMoviesByCategoryQuery
} from "@/features/category-movies/api/categoryMovies.api.ts";

export const useRandomPopularBackdrop = () => {
  const {data, isLoading} = useFetchMoviesByCategoryQuery({category: 'popular'});

  const backdrop = useMemo(() => {
    const results = data?.results;
    if (!results?.length) return null;

    const moviesWithBackdrop = results.filter((m) => m.backdrop_path);
    if (!moviesWithBackdrop.length) return null;

    const index = Math.floor(POPULAR_BACKDROP_SEED * moviesWithBackdrop.length);
    return moviesWithBackdrop[index]?.backdrop_path ?? null;
  }, [data]);

  return {backdrop, isLoading}
}