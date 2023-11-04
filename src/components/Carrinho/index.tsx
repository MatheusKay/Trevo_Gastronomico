import { useSelector, useDispatch } from 'react-redux'

import { CarrinhoContainer, Overlay, BarraLateral, InfosItem } from './style'
import { Botao } from '../../estiloGlobal'

import { RootReducer } from '../../store'

import { fechar } from '../../store/reducers/carrinho'
import { formaPreco } from '../PratosList'
import CarrinhoItem from '../CarrinhoItem'
import { Menu } from '../../pages/Restaurantes'
import CadastroPagemnto from '../CadastroPagamento'

const Carrinho = () => {
  const { estaAberto, itens, itensMenu } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const dispatch = useDispatch()

  const precoDoMenu = () => {
    return itensMenu.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const precoDoSite = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const precoTotal = precoDoSite() + precoDoMenu()

  return (
    <CarrinhoContainer className={estaAberto ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(fechar())} />
      <BarraLateral>
        {/* <ul>
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
          <span>{formaPreco(precoTotal)}</span>
        </InfosItem>
        <Botao type="button">Continuar com a compra</Botao> */}
        <CadastroPagemnto />
      </BarraLateral>
    </CarrinhoContainer>
  )
}

export default Carrinho
