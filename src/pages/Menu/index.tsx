import { useState, useEffect } from 'react'

import PratosList from '../../components/PratosList'
import { Menu, Rest } from '../Restaurantes'

const MenuList = () => {
  const [restaurantes, setRestaurantes] = useState<Rest[]>([])

  useEffect(() => {
    fetch('https://fake-api-rose.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  const filtroMenu = restaurantes.flatMap((restaurante) => restaurante.cardapio)

  const filtro = (menuCat: Menu[], categoria: string) => {
    return menuCat.filter((item) => item.categoria === categoria)
  }

  return (
    <>
      <PratosList
        restID={restaurantes}
        titulo="Entradas"
        menu={filtro(filtroMenu, 'Entrada')}
      />
      <PratosList
        restID={restaurantes}
        titulo="Pratos principais"
        menu={filtro(filtroMenu, 'Prato principal')}
      />
      <PratosList
        restID={restaurantes}
        titulo="Sobremesas"
        menu={filtro(filtroMenu, 'Sobremesa')}
      />
    </>
  )
}

export default MenuList
