import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
const appApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getLatestTransactions: builder.query<any[], void>({
      query: () => '/latestTransactions',
    })
  }),
});

export const { useGetLatestTransactionsQuery } = appApiSlice;
export default appApiSlice;
