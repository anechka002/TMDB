import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {SortByType} from "@/widgets/movie-filters/model/types.ts";
import type {MovieResponse} from "@/entities/movie/api/movie.api.types.ts";

export const discoverMoviesApi = createApi({
  reducerPath: 'discoverMoviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),
  tagTypes: ['SortByMovies'],
  endpoints: build => ({
    discoverMovies: build.query<MovieResponse, { sort_by: SortByType; page?: number; vote_average_gte?: number; vote_average_lte?: number }>({
      query: ({sort_by, page = 1, vote_average_gte, vote_average_lte}) => ({
        url: `/discover/movie`,
        params: {
          sort_by,
          page,
          'vote_average.gte': vote_average_gte,
          'vote_average.lte': vote_average_lte,
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
    }),
  }),
})

export const {useDiscoverMoviesQuery} = discoverMoviesApi