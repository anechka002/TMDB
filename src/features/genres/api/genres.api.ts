import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {GenresResponse} from "@/features/genres/model/types.ts";

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),
  tagTypes: ['SortByMovies'],
  endpoints: build => ({
    genresMovies: build.query<GenresResponse, void>({
      query: () => ({
        url: `/genre/movie/list`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
    }),
  }),
})

export const {useGenresMoviesQuery} = genresApi