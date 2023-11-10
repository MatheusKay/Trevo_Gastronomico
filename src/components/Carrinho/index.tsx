import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CarrinhoItem from '../CarrinhoItem'
import CadastroPagemnto from '../CadastroPagamento'

import { RootReducer } from '../../store'
import { fechar } from '../../store/reducers/carrinho'

import { formaPreco } from '../../ultis'
import { precoDoMenu, precoDoSite } from '../../ultis'

import * as S from './style'
import { Botao } from '../../estiloGlobal'

const Carrinho = () => {
  const { estaAberto, itens, itensMenu } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const dispatch = useDispatch()
  const [finalizarCompra, setFinalizarCompra] = useState(false)

  const precoTotal = precoDoSite(itens) + precoDoMenu(itensMenu)

  return (
    <S.CarrinhoContainer className={estaAberto ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(fechar())} />
      <S.BarraLateral>
        {finalizarCompra ? (
          <>
            <CadastroPagemnto
              onClick={() => setFinalizarCompra(false)}
              finalizaCompra={finalizarCompra}
            />
          </>
        ) : (
          <>
            {itens.length > 0 || itensMenu.length > 0 ? (
              <>
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
                <S.InfosItem>
                  <p>Valor total</p>
                  <span>{formaPreco(precoTotal)}</span>
                </S.InfosItem>
                <Botao type="button" onClick={() => setFinalizarCompra(true)}>
                  Continuar com a compra
                </Botao>
              </>
            ) : (
              <p className="carrinho-vazio">
                Para dar o próximo passo rumo à experiência gastronômica dos
                seus sonhos, selecione e adicione ao carrinho pelo menos um
                prato irresistível.
              </p>
            )}
          </>
        )}
      </S.BarraLateral>
    </S.CarrinhoContainer>
  )
}

export default Carrinho
