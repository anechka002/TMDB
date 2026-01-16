import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {MovieResponse} from "@/features/category-movies/api/moviesApi.types.ts";
import type {SortByType} from "@/widgets/movie-filters/model/types.ts";

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
    discoverMovies: build.query<MovieResponse, { sort_by: SortByType; page?: number }>({
      query: ({sort_by, page = 1}) => ({
        url: `/discover/movie`,
        params: {
          sort_by,
          page,
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'SortByMovies', id: arg.sort_by },
      ],
    }),

  }),
})

export const {useDiscoverMoviesQuery} = discoverMoviesApi