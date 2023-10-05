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
      <img src={logo} alt="Trevo da gastronomia" />
      <Links>
        <li>
          <a href="">Restaurantes</a>
        </li>
        <li>
          <a href="">Menu</a>
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
