import { useSelector, useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/Vetor_Logo.png'
import carrinho from '../../assets/images/shopping-cart 1.svg'

import {
  Cabecalho,
  ContainerHeader,
  Links,
  NumCarrinho,
  ContainerCarrinho
} from './style'

import { RootReducer } from '../../store'
import { abrir } from '../../store/reducers/carrinho'

const Header = () => {
  const { itens, itensMenu } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const dispatch = useDispatch()

  return (
    <Cabecalho>
      <ContainerHeader>
        <HashLink to="/">
          <img src={logo} alt="Trevo da gastronomia" />
        </HashLink>
        <Links>
          <li>
            <HashLink to="/restaurantes">Restaurantes</HashLink>
          </li>
          <li>
            <HashLink to="/menu">Menu</HashLink>
          </li>
          <li>
            <HashLink to="/#pratos-principais">Destaques</HashLink>
          </li>
        </Links>
      </ContainerHeader>
      <ContainerCarrinho>
        <NumCarrinho>{itens.length + itensMenu.length}</NumCarrinho>
        <img onClick={() => dispatch(abrir())} src={carrinho} alt="Carrinho" />
      </ContainerCarrinho>
    </Cabecalho>
  )
}

export default Header
