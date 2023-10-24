import RestList from '../../components/RestList'
import { useGetRestaurantesQuery } from '../../services/api'

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
  const { data: restaurantes } = useGetRestaurantesQuery()

  return (
    <>
      <RestList titulo="Todos os Restaurantes" rest={restaurantes} />
    </>
  )
}

export default Restaurantes
