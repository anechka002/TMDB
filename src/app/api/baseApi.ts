import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {handleErrors} from "@/shared/lib";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Movies', 'Movie', 'Credits', 'Similar'],
  baseQuery: async (args, api, extraOptions) => {
    await new Promise(resolve => setTimeout(resolve, 5000)) // delay
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: headers => {
        headers.set(
          'Authorization',
          `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        )
        return headers
      },
    })(args, api, extraOptions);

    if (result.error) {
      handleErrors(result.error)
    }

    return result;
  },
  endpoints: () => ({}),
})