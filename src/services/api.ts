import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Rest } from '../pages/Restaurantes'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-rose.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Rest[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Rest, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api

export default api
