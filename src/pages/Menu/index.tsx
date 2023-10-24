import PratosList from '../../components/PratosList'
import { Menu } from '../Restaurantes'
import { useGetRestaurantesQuery } from '../../services/api'

const MenuList = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    const filtroMenu = restaurantes.flatMap(
      (restaurante) => restaurante.cardapio
    )

    const filtro = (menuCat: Menu[], categoria: string) => {
      return menuCat.filter((item) => item.categoria === categoria)
    }

    return (
      <>
        <PratosList titulo="Entradas" menu={filtro(filtroMenu, 'Entrada')} />
        <PratosList
          titulo="Pratos principais"
          menu={filtro(filtroMenu, 'Prato principal')}
        />
        <PratosList
          titulo="Sobremesas"
          menu={filtro(filtroMenu, 'Sobremesa')}
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default MenuList
