import type {
  MovieCreditsResponse,
  MovieDetailsResponse, MovieResponse
} from "@/entities/movie/api/movie.api.types.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const movieApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMovieDetails: build.query<MovieDetailsResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}`,
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Movie', id: arg.movie_id },
      ],
    }),
    getMovieCredits: build.query<MovieCreditsResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}/credits`,
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Credits', id: arg.movie_id },
      ],
    }),
    getSimilarMovies: build.query<MovieResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}/similar`,
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Similar', id: arg.movie_id },
      ],
    }),

  }),
})

export const { useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = movieApi