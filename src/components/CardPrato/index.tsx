import Tag from '../Tag'

import { Card, Infos, Titulo, Descricao, ImgMenu, Avaliacao } from './style'

import vetorEstrela from '../../assets/images/Vetor_Estrela.png'

type Props = {
  imagem: string
  titulo: string
  nota: number
  categoria?: string
  descricao: string
}

const CardPrato = ({ imagem, titulo, nota, categoria, descricao }: Props) => (
  <Card>
    <ImgMenu src={imagem} alt={titulo} />
    <Infos>
      <Titulo>{titulo}</Titulo>
      <Tag tag="bold">
        {nota}
        <Avaliacao src={vetorEstrela} alt="Avaliação do prato" />
      </Tag>
    </Infos>
    {categoria && <Tag tag="normal">{categoria}</Tag>}
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default CardPrato
