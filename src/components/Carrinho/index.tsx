import { useSelector, useDispatch } from 'react-redux'

import { CarrinhoContainer, Overlay, BarraLateral, InfosItem } from './style'
import { Botao } from '../../estiloGlobal'

import { RootReducer } from '../../store'

import { fechar } from '../../store/reducers/carrinho'
import { formaPreco } from '../PratosList'
import CarrinhoItem from '../CarrinhoItem'

const Carrinho = () => {
  const { estaAberto, itens, itensMenu } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const dispatch = useDispatch()

  const precoTotal = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CarrinhoContainer className={estaAberto ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(fechar())} />
      <BarraLateral>
        <ul>
          {itens.map(({ titulo, url, preco, categoria, id }) => (
            <CarrinhoItem
              key={titulo}
              id={id}
              categoria={categoria}
              preco={preco}
              nome={titulo ? titulo : ''}
              foto={url ? url : ''}
            />
          ))}
          {itensMenu.map(({ nome, categoria, foto, preco, id }) => (
            <CarrinhoItem
              key={nome}
              id={id}
              categoria={categoria}
              preco={preco}
              nome={nome}
              foto={foto}
            />
          ))}
        </ul>
        <InfosItem>
          <p>Valor total</p>
          <span>{formaPreco(precoTotal())}</span>
        </InfosItem>
        <Botao type="button">Continuar com a compra</Botao>
      </BarraLateral>
    </CarrinhoContainer>
  )
}

export default Carrinho
