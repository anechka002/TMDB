import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  MovieCreditsResponse,
  MovieDetailsResponse, MovieResponse
} from "@/entities/movie/api/movie.api.types.ts";

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),
  tagTypes: ['Movie', 'Credits', 'Similar'],
  endpoints: build => ({
    getMovieDetails: build.query<MovieDetailsResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Movie', id: arg.movie_id },
      ],
    }),
    getMovieCredits: build.query<MovieCreditsResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}/credits`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Credits', id: arg.movie_id },
      ],
    }),
    getSimilarMovies: build.query<MovieResponse, {movie_id: string}>({
      query: ({movie_id}) => ({
        url: `/movie/${movie_id}/similar`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Similar', id: arg.movie_id },
      ],
    }),

  }),
})

export const { useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = movieApi