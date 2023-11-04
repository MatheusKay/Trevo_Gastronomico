import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Rest } from '../pages/Restaurantes'

type Produto = {
  id: number
  preco: number
}

type Pagamento = {
  produtos: Produto[]
  entrega: {
    destinatario: string
    endereco: {
      descricao: string
      cidade: string
      cep: string
      numero: number
      complemento: string
    }
  }
  Resposta: {
    cartao: {
      nome: string
      numero: number
      codigo: number
      expiracao: {
        mes: number
        ano: number
      }
    }
  }
}

type PagamentoResposta = {
  onderId: string
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
