import type {
  SortByType
} from "@/widgets/movie-filters/model/types.ts";
import type {MovieResponse} from "@/entities/movie/api/movie.api.types.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const discoverMoviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    discoverMovies: build.query<MovieResponse, { sort_by: SortByType; page?: number; vote_average_gte?: number; vote_average_lte?: number; with_genres?: string }>({
      query: ({sort_by, page = 1, vote_average_gte, vote_average_lte, with_genres}) => ({
        url: `/discover/movie`,
        params: {
          sort_by,
          page,
          'vote_average.gte': vote_average_gte,
          'vote_average.lte': vote_average_lte,
          with_genres,
        }
      }),
    }),
  }),
})

export const {useDiscoverMoviesQuery} = discoverMoviesApi