import {
  BannerRest,
  DescRest,
  LogoRest,
  Titulo,
  ContainerMenu,
  TituloSec,
  Aside,
  ContainerDescRest
} from '../../pages/Restaurante/style'

import CardPrato2 from '../CardPrato2.0'
import { Rest } from '../../pages/Restaurantes'

// import Menu from '../../models/Cardapio'

export type Props = {
  restaurante: Rest[]
}

const Restaurante = ({ restaurante }: Props) => (
  <div>
    <div className="container">
      {restaurante.map((rest) => (
        <>
          <BannerRest style={{ backgroundImage: rest.capa }}></BannerRest>
          <LogoRest>
            <img src={rest.logo} alt={rest.titulo} />
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
            {/* <div>
              <CardPrato2 />
              <CardPrato2 />
              <CardPrato2 />
              <CardPrato2 />
            </div> */}
          </ContainerMenu>
        </>
      ))}
    </div>
  </div>
)

export default Restaurante
