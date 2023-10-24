import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
        <Link to="/">
          <img src={logo} alt="Trevo da gastronomia" />
        </Link>
        <Links>
          <li>
            <Link to="/restaurantes">Restaurantes</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <a href="">Destaques</a>
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
