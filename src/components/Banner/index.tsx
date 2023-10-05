import { Imagem, ContainerRest, Titulo } from './style'

import restDoces from '../../assets/images/Doces_Cafe.png'
import restSabor from '../../assets/images/Sabor_Tempero.png'
import restTrattoria from '../../assets/images/Ristorante_Trattoria.png'
import restFogo from '../../assets/images/Fogo_Brasa.png'

const Banner = () => (
  <Imagem>
    <div className="container">
      <Titulo>
        Saboreie o melhor da culinária nos restaurantes mais incríveis. Seu
        paladar agradece, no <span>Trevo da Gastronomia</span>
      </Titulo>
    </div>
    <ContainerRest>
      <img src={restDoces} alt="" />
      <img src={restSabor} alt="" />
      <img src={restTrattoria} alt="" />
      <img src={restFogo} alt="" />
    </ContainerRest>
  </Imagem>
)

export default Banner
