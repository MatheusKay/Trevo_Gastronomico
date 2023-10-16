import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Rest } from '../Restaurantes'

import {
  BannerRest,
  Aside,
  ContainerDescRest,
  ContainerMenu,
  DescRest,
  LogoRest,
  Titulo,
  TituloSec
} from './style'
import CardPrato2 from '../../components/CardPrato2.0'

const PagRestaurante = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Rest>()
  const [categoria, setCategoria] = useState('Entrada')

  useEffect(() => {
    fetch(`https://fake-api-rose.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  const filtroMenu = restaurante.cardapio.filter(
    (item) => item.categoria === categoria
  )

  return (
    <>
      <BannerRest style={{ backgroundImage: `url(${restaurante.capa})` }} />
      <div className="container">
        <LogoRest>
          <img src={restaurante.logo} alt={restaurante.titulo} />
          <Titulo>{restaurante.titulo}</Titulo>
        </LogoRest>
        <ContainerDescRest>
          <DescRest>{restaurante.descricao}</DescRest>
        </ContainerDescRest>
        <ContainerMenu>
          <Aside>
            <TituloSec onClick={() => setCategoria('Entrada')}>
              Entradas
            </TituloSec>
            <TituloSec onClick={() => setCategoria('Prato principal')}>
              Pratos principais
            </TituloSec>
            <TituloSec onClick={() => setCategoria('Sobremesa')}>
              Sobremesas
            </TituloSec>
          </Aside>
          <div>
            {filtroMenu.map((item) => (
              <>
                <CardPrato2
                  descricao={item.descricao}
                  imagem={item.foto}
                  preco={item.preco}
                  titulo={item.nome}
                  key={item.id}
                />
              </>
            ))}
          </div>
        </ContainerMenu>
      </div>
    </>
  )
}

export default PagRestaurante
