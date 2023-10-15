import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import PratosList from '../../components/PratosList'

import { Rest } from '../Restaurantes'
import RestList from '../../components/RestList'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Rest[]>([])

  useEffect(() => {
    fetch('https://fake-api-rose.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  const filtroRest = restaurantes.filter((restaurante) => {
    return restaurante.avaliacao > 4.7
  })

  const filtroMenu = restaurantes.flatMap((restaurante) => restaurante.cardapio)
  const menuRest = filtroMenu.filter((item) => item.nota > 4.8).slice(0, 4)

  return (
    <>
      <Banner />
      <PratosList titulo="Pratos principais" menu={menuRest} />
      <RestList titulo="Restaurantes principais" rest={filtroRest} />
    </>
  )
}

export default Home
