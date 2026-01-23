import type {GenresResponse} from "@/features/genres/model/types.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const genresApi = baseApi.injectEndpoints({
  endpoints: build => ({
    genresMovies: build.query<GenresResponse, void>({
      query: () => ({
        url: `/genre/movie/list`,
      }),
    }),
  }),
})

export const {useGenresMoviesQuery} = genresApi