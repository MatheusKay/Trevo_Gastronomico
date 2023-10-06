import Tag from '../Tag'

import { Card, Infos, Titulo, Descricao } from './style'

type Props = {
  imagem: string
  titulo: string
  nota: number
  categoria?: string
  descricao: string
}

const CardPrato = ({ imagem, titulo, nota, categoria, descricao }: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <Infos>
      <Titulo>{titulo}</Titulo>
      <Tag tag="bold">{nota}</Tag>
    </Infos>
    {categoria && <Tag tag="normal">{categoria}</Tag>}
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default CardPrato
