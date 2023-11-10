import Carregando from '../../components/Carregando'
import RestList from '../../components/RestList'

import { useGetRestaurantesQuery } from '../../services/api'

const Restaurantes = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <Carregando />
  }

  return (
    <>
      <RestList titulo="Todos os Restaurantes" rest={restaurantes} />
    </>
  )
}

export default Restaurantes
