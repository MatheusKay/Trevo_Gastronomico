import { Link } from 'react-router-dom'

import { Imagem, ContainerRest, Titulo } from './style'

import { Rest } from '../../pages/Restaurantes'

type Props = {
  imagens: Rest[]
}

const Banner = ({ imagens }: Props) => (
  <Imagem>
    <div className="container">
      <Titulo>
        Saboreie o melhor da culinária nos restaurantes mais incríveis. Seu
        paladar agradece, no <span>Trevo da Gastronomia</span>
      </Titulo>
    </div>
    <ContainerRest>
      {imagens.map((imagem) => (
        <Link to={`/restaurante/${imagem.id}`} key={imagem.id}>
          <img src={imagem.logo} alt={imagem.titulo} />
        </Link>
      ))}
    </ContainerRest>
  </Imagem>
)

export default Banner
