import RestList from '../../components/RestList'

import { useGetRestaurantesQuery } from '../../services/api'

const Restaurantes = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  return (
    <>
      <RestList titulo="Todos os Restaurantes" rest={restaurantes} />
    </>
  )
}

export default Restaurantes
