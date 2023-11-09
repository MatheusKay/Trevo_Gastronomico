import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CardPrato2 from '../../components/CardPrato2.0'

import { useGetRestauranteQuery } from '../../services/api'
import { abrir, addMenu } from '../../store/reducers/carrinho'

import { formaPreco } from '../../ultis'

import * as S from './style'

type PratoParametro = {
  id: string
}

const PagRestaurante = () => {
  const dispatch = useDispatch()

  const { id } = useParams() as PratoParametro

  const [categoria, setCategoria] = useState('Entrada')
  const { data: restaurante } = useGetRestauranteQuery(id)

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
      <S.BannerRest style={{ backgroundImage: `url(${restaurante.capa})` }} />
      <div className="container">
        <S.LogoRest>
          <img src={restaurante.logo} alt={restaurante.titulo} />
          <S.Titulo>{restaurante.titulo}</S.Titulo>
        </S.LogoRest>
        <S.ContainerDescRest>
          <S.DescRest>{restaurante.descricao}</S.DescRest>
        </S.ContainerDescRest>
        <S.ContainerMenu>
          <S.Aside>
            <S.TituloSec onClick={() => setCategoria('Entrada')}>
              Entradas
            </S.TituloSec>
            <S.TituloSec onClick={() => setCategoria('Prato principal')}>
              Pratos principais
            </S.TituloSec>
            <S.TituloSec onClick={() => setCategoria('Sobremesa')}>
              Sobremesas
            </S.TituloSec>
          </S.Aside>
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
        </S.ContainerMenu>
      </div>
    </>
  )
}

export default PagRestaurante
