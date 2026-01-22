import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {MovieResponse} from "@/entities/movie/api/movie.api.types.ts";

export const searchApi  = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),
  tagTypes: ['Search'],
  endpoints: build => ({
    searchMovies: build.query<MovieResponse, {query: string; page?: number }>({
      query: ({query, page = 1}) => ({
        url: `/search/movie`,
        params: {
          query,
          page,
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
    }),
  }),
})

export const { useSearchMoviesQuery } = searchApi