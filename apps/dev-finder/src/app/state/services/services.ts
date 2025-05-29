import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GithubInt } from '../../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  tagTypes: ['devs'],
  endpoints: (builder) => ({
    getDev: builder.query({
      query: (username) => ({ url: `users/${username}` }),
      keepUnusedDataFor: 500000,
      transformResponse: (response: GithubInt) => response,
      providesTags: (result, error, username) => [{ type: 'devs', username }],
      transformErrorResponse: (response, meta, arg) => {
        return 'Unable to find that user';
      },
    }),
  }),
});

export const { useGetDevQuery } = api;
console.log('API -->', api);

export default api;
