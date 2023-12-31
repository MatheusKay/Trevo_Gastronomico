import { Link } from 'react-router-dom'

import Carregando from '../Carregando'

import * as S from './style'

type Props = {
  imagens: Rest[]
  estaCarregando: boolean
}

const Banner = ({ imagens, estaCarregando }: Props) => {
  if (estaCarregando) {
    return <Carregando />
  }

  return (
    <S.Imagem>
      <div className="container">
        <S.Titulo>
          Saboreie o melhor da culinária nos restaurantes mais incríveis. Seu
          paladar agradece, no <span>Trevo da Gastronomia</span>
        </S.Titulo>
      </div>
      <S.ContainerRest>
        {imagens.map((imagem) => (
          <Link to={`/restaurante/${imagem.id}`} key={imagem.id}>
            <img src={imagem.logo} alt={imagem.titulo} />
          </Link>
        ))}
      </S.ContainerRest>
    </S.Imagem>
  )
}

export default Banner
