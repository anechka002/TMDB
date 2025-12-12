import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  MovieResponse
} from "@/features/category-movies/api/popularApi.types.ts";

// // `createApi` - функция из `RTK Query`, позволяющая создать объект `API`
// // для взаимодействия с внешними `API` и управления состоянием приложения
// export const popularApi = createApi({
//   // `reducerPath` - имя куда будут сохранены состояние и экшены для этого `API`
//   reducerPath: 'popularApi',
//   // `baseQuery` - конфигурация для `HTTP-клиента`, который будет использоваться для отправки запросов
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
//       return headers
//     },
//   }),
//   // `endpoints` - метод, возвращающий объект с эндпоинтами для `API`, описанными
//   // с помощью функций, которые будут вызываться при вызове соответствующих методов `API`
//   // (например `get`, `post`, `put`, `patch`, `delete`)
//   endpoints: build => ({
//     // Типизация аргументов (<возвращаемый тип, тип query аргументов (`QueryArg`)>)
//     // `query` по умолчанию создает запрос `get` и указание метода необязательно
//     fetchPopularMovies: build.query<MovieResponse, void>({
//       query: () => {
//         return {
//           method: 'get',
//           url: `/movie/popular`,
//           params: {
//             api_key: import.meta.env.VITE_API_KEY
//           }
//         }
//       },
//     }),
//   }),
// })

export const popularApi = createApi({
  reducerPath: 'popularApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
      return headers
    },
  }),

  endpoints: build => ({
    fetchPopularMovies: build.query<MovieResponse, void>({
      query: () => ({
        url: `/movie/popular`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      }),
    }),
  }),
})

// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const { useFetchPopularMoviesQuery } = popularApi