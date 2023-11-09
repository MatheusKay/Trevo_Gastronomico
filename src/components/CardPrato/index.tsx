import Tag from '../Tag'

import vetorEstrela from '../../assets/images/Vetor_Estrela.png'

import * as S from './style'

type Props = {
  imagem: string
  titulo: string
  nota: number
  categoria?: string
  descricao: string
  id: number
}

const CardPrato = ({ imagem, titulo, nota, categoria, descricao }: Props) => {
  return (
    <S.Card>
      <S.ImgMenu src={imagem} alt={titulo} />
      <S.Infos>
        <S.Titulo>{titulo}</S.Titulo>
        <Tag tag="bold">
          {nota}
          <S.Avaliacao src={vetorEstrela} alt="Avaliação do prato" />
        </Tag>
      </S.Infos>
      {categoria && <Tag tag="normal">{categoria}</Tag>}
      <S.Descricao>{descricao}</S.Descricao>
    </S.Card>
  )
}

export default CardPrato
