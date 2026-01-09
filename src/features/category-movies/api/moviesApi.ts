import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  CategoryType,
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
  tagTypes: ['Movies', 'Search'],
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

  }),
})

export const { useFetchMoviesByCategoryQuery, useSearchMoviesQuery } = moviesApi