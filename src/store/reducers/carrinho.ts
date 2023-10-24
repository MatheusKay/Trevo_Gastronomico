import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../pages/Restaurantes'
import { Modal } from '../../components/PratosList'

type CarrinhoEstado = {
  itens: Modal[]
  itensMenu: Menu[]
  estaAberto: boolean
}

const initialState: CarrinhoEstado = {
  itens: [],
  itensMenu: [],
  estaAberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<Modal>) => {
      const restaurante = state.itens.find(
        (item) => item.id === action.payload.id
      )

      if (!restaurante) {
        state.itens.push(action.payload)
      } else {
        alert('Esse prato ja foi adicionado ao carrinho')
      }
    },
    addMenu: (state, action: PayloadAction<Menu>) => {
      const restauranteMenu = state.itensMenu.find(
        (item) => item.id === action.payload.id
      )

      if (!restauranteMenu) {
        state.itensMenu.push(action.payload)
      } else {
        alert('Esse prato ja foi adicionado ao carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
      state.itensMenu = state.itensMenu.filter(
        (item) => item.id !== action.payload
      )
    },
    abrir: (state) => {
      state.estaAberto = true
    },
    fechar: (state) => {
      state.estaAberto = false
    }
  }
})

export const { addModal, addMenu, remover, abrir, fechar } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
