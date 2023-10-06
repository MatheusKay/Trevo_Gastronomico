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

const Header = () => (
  <Cabecalho>
    <ContainerHeader>
      <Link to="/">
        <img src={logo} alt="Trevo da gastronomia" />
      </Link>
      <Links>
        <li>
          <a href="">Restaurantes</a>
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
      <NumCarrinho>0</NumCarrinho>
      <img src={carrinho} alt="Carrinho" />
    </ContainerCarrinho>
  </Cabecalho>
)

export default Header
