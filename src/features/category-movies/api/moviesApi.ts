import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  CategoryType, MovieCreditsResponse, MovieDetailsResponse,
  MovieResponse
} from "@/features/category-movies/api/moviesApi.types.ts";

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),
  tagTypes: ['Movies', 'Search', 'Movie', 'Credits', 'Similar'],
  endpoints: build => ({
    fetchMoviesByCategory: build.query<MovieResponse, { category: CategoryType; page?: number }>({
      query: ({category, page = 1}) => ({
        url: `/movie/${category}`,
        params: {
          page,
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Movies', id: arg.category },
      ],
    }),
    searchMovies: build.query<MovieResponse, {query: string; page?: number }>({
      query: ({query, page = 1}) => ({
        url: `/search/movie`,
        params: {
          query,
          page,
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'Search', id: arg.query },
      ],
    }),
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

export const { useFetchMoviesByCategoryQuery, useSearchMoviesQuery, useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = moviesApi