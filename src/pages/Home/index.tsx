import Banner from '../../components/Banner'
import Carregando from '../../components/Carregando'
import PratosList from '../../components/PratosList'
import RestList from '../../components/RestList'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (restaurantes) {
    const filtroRest = restaurantes.filter((restaurante) => {
      return restaurante.avaliacao > 4.7
    })

    const filtroMenu = restaurantes.flatMap(
      (restaurante) => restaurante.cardapio
    )
    const menuRest = filtroMenu.filter((item) => item.nota > 4.8).slice(0, 4)

    return (
      <>
        <Banner imagens={filtroRest} estaCarregando={isLoading} />
        <PratosList
          titulo="Pratos principais"
          menu={menuRest}
          id="pratos-principais"
        />
        <RestList titulo="Restaurantes principais" rest={filtroRest} />
      </>
    )
  }

  return <Carregando />
}

export default Home
