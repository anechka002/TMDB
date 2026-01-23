import type {CategoryType} from "@/features/category-movies/api/categoryMovies.api.types.ts";
import type {MovieResponse} from "@/entities/movie/api/movie.api.types.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const categoryMoviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchMoviesByCategory: build.query<MovieResponse, { category: CategoryType; page?: number }>({
      query: ({category, page = 1}) => ({
        url: `/movie/${category}`,
        params: {
          page,
        }
      }),
    }),
  }),
})

export const { useFetchMoviesByCategoryQuery } = categoryMoviesApi