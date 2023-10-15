import { useEffect, useState } from 'react'

import RestList from '../../components/RestList'

export type Rest = {
  id: number
  logo: string
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  cardapio: {
    id: number
    foto: string
    nome: string
    preco: number
    descricao: string
    categoria: string
    nota: number
  }[]
}

export type Menu = {
  categoria: string
  descricao: string
  foto: string
  id: number
  nome: string
  nota: number
  preco: number
}

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Rest[]>([])

  useEffect(() => {
    fetch('https://fake-api-rose.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  return (
    <>
      <RestList titulo="Todos os Restaurantes" rest={restaurantes} />
    </>
  )
}

export default Restaurantes
