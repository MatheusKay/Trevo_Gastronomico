import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/Vetor_Logo.png'
import carrinho from '../../assets/images/shopping-cart 1.svg'

import { RootReducer } from '../../store'
import { abrir } from '../../store/reducers/carrinho'

import * as S from './style'

const Header = () => {
  const { itens, itensMenu } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const dispatch = useDispatch()
  const [estaAberto, setEstaAberto] = useState(false)

  return (
    <S.Cabecalho>
      <S.Humburgue onClick={() => setEstaAberto(!estaAberto)}>
        <span />
        <span />
        <span />
      </S.Humburgue>
      <S.ContainerHeader>
        <HashLink to="/">
          <img src={logo} alt="Trevo da gastronomia" />
        </HashLink>
        <S.Links>
          <li>
            <HashLink to="/restaurantes">Restaurantes</HashLink>
          </li>
          <li>
            <HashLink to="/menu">Menu</HashLink>
          </li>
          <li>
            <HashLink to="/#pratos-principais">Destaques</HashLink>
          </li>
        </S.Links>
      </S.ContainerHeader>
      <S.ContainerCarrinho>
        <S.NumCarrinho>{itens.length + itensMenu.length}</S.NumCarrinho>
        <img onClick={() => dispatch(abrir())} src={carrinho} alt="Carrinho" />
      </S.ContainerCarrinho>
      <S.NavHamburgue className={estaAberto ? 'aberto' : ''}>
        <S.Links>
          <li>
            <HashLink to="/restaurantes">Restaurantes</HashLink>
          </li>
          <li>
            <HashLink to="/menu">Menu</HashLink>
          </li>
          <li>
            <HashLink to="/#pratos-principais">Destaques</HashLink>
          </li>
        </S.Links>
      </S.NavHamburgue>
    </S.Cabecalho>
  )
}

export default Header
