import type {MovieResponse} from "@/entities/movie/api/movie.api.types.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const searchApi  = baseApi.injectEndpoints({
  endpoints: build => ({
    searchMovies: build.query<MovieResponse, {query: string; page?: number }>({
      query: ({query, page = 1}) => ({
        url: `/search/movie`,
        params: {
          query,
          page,
        }
      }),
    }),
  }),
})

export const { useSearchMoviesQuery } = searchApi