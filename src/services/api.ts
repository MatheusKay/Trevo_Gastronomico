import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Rest } from '../pages/Restaurantes'

type Produto = {
  id: number
  price: number
}

type Pagamento = {
  products: Produto[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PagamentoResposta = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PagamentoResposta, Pagamento>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api
