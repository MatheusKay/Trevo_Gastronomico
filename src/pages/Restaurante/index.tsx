import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { formaPreco } from '../../components/PratosList'

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

import { useGetRestauranteQuery } from '../../services/api'
import { abrir, addMenu } from '../../store/reducers/carrinho'
import { Menu } from '../Restaurantes'

const PagRestaurante = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const [categoria, setCategoria] = useState('Entrada')
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  const filtroMenu = restaurante.cardapio.filter(
    (item) => item.categoria === categoria
  )

  const addPrato = (item: Menu) => {
    dispatch(addMenu(item))
    dispatch(abrir())
  }

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
              <div onClick={() => addPrato(item)} key={item.id}>
                <CardPrato2
                  descricao={item.descricao}
                  imagem={item.foto}
                  preco={formaPreco(item.preco)}
                  titulo={item.nome}
                />
              </div>
            ))}
          </div>
        </ContainerMenu>
      </div>
    </>
  )
}

export default PagRestaurante
