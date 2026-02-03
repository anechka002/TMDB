import type { RootState } from '@/app/model/store.ts'
import { useSelector } from 'react-redux'
import {
  categoryMoviesApi
} from "@/features/category-movies/api/categoryMovies.api.ts";
import {searchApi} from "@/features/search/api/search.api.ts";
import {genresApi} from "@/features/genres/api/genres.api.ts";
import {
  discoverMoviesApi
} from "@/features/discover-movies/api/discoverMovies.api.ts";

// Список эндпоинтов для исключения из глобального индикатора
const excludedEndpoints = [
  categoryMoviesApi.endpoints.fetchMoviesByCategory.name,
  searchApi.endpoints.searchMovies.name,
  genresApi.endpoints.genresMovies.name,
  discoverMoviesApi.endpoints.discoverMovies.name,
]

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    // Получаем все активные запросы из RTK Query API
    const queries = Object.values(state.baseApi.queries || {})
    const mutations = Object.values(state.baseApi.mutations || {})

    // // Проверяем, есть ли активные запросы (статус 'pending')
    // const hasActiveQueries = queries.some(query => query?.status === 'pending')
    // const hasActiveMutations = mutations.some(mutation => mutation?.status === 'pending')

    // 1 var
    const hasEverFulfilledByEndpoint = new Set(
      queries
        .filter((q) => q?.status === "fulfilled" && q.endpointName)
        .map((q) => q!.endpointName!)
    );

    const hasActiveQueries = queries.some((q) => {
      if (!q || q.status !== "pending" || !q.endpointName) return false;

      // обычные эндпоинты: любой pending -> показываем
      if (!excludedEndpoints.includes(q.endpointName)) return true;

      // “особые” эндпоинты: показываем только если это не первый раз
      return hasEverFulfilledByEndpoint.has(q.endpointName);
    });

    // 2var
  // //  Проверяем, есть ли активные запросы (статус 'pending')
  //   const hasActiveQueries = queries.some(query => {
  //     // if (query?.status !== 'pending') return
  //     // if (excludedEndpoints.includes(query.endpointName)) {
  //     //   const completedQueries = queries.filter(q => q?.status === 'fulfilled')
  //     //   return completedQueries.length > 0
  //     // }
  //     if (!query) return false;
  //     if (query.status !== "pending") return false;
  //     if (!query.endpointName) return false;
  //     return !excludedEndpoints.includes(query.endpointName);
  //   })

    const hasActiveMutations = mutations.some(mutation => mutation?.status === 'pending')

    return hasActiveQueries || hasActiveMutations
  })
}