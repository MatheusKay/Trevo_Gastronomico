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

import Menu from '../../models/Cardapio'

type Props = {
  restaurante: Menu[]
}

const Restaurante = ({ restaurante }: Props) => (
  <div>
    <BannerRest></BannerRest>
    <div className="container">
      {restaurante.map((rest) => (
        <>
          <LogoRest>
            <img src={rest.imagem} alt={rest.titulo} />
            <Titulo>{rest.titulo}</Titulo>
          </LogoRest>
          <ContainerDescRest>
            <DescRest>{rest.descricao}</DescRest>
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
        </>
      ))}
    </div>
  </div>
)

export default Restaurante
