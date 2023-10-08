import {
  BannerRest,
  DescRest,
  LogoRest,
  Titulo,
  ContainerMenu,
  TituloSec,
  Aside,
  ContainerDescRest
} from './style'

import vetorSabor from '../../assets/images/Sabor_Tempero.png'
import CardPrato2 from '../CardPrato2.0'

const Restaurante = () => (
  <div>
    <BannerRest></BannerRest>
    <div className="container">
      <LogoRest>
        <img src={vetorSabor} alt="Logo do Sabor & Temperos" />
        <Titulo>Sabor & Tempero Bistrô</Titulo>
      </LogoRest>
      <ContainerDescRest>
        <DescRest>
          O Sabor & Tempero Bistrô é um restaurante acolhedor que traz uma
          explosão de sabores de todo o mundo para sua mesa. Apesar de não ser
          muito elegante em termos de decoração, este bistrô é famoso por sua
          incrível variedade de pratos inspirados em diferentes países.
        </DescRest>
      </ContainerDescRest>
      <ContainerMenu>
        <Aside>
          <TituloSec>Entradas</TituloSec>
          <TituloSec>Pratos principais</TituloSec>
          <TituloSec>Sobremesas</TituloSec>
        </Aside>
        <div>
          <CardPrato2 />
          <CardPrato2 />
          <CardPrato2 />
          <CardPrato2 />
        </div>
      </ContainerMenu>
    </div>
  </div>
)

export default Restaurante
