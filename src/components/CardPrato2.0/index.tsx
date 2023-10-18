import { Card, InfosCard, ValorCard, BotaoCard, DescCard } from './style'

import Tag from '../Tag'

type Props = {
  imagem: string
  titulo: string
  preco: string
  descricao: string
}

const CardPrato2 = ({ descricao, imagem, preco, titulo }: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <div>
      <InfosCard>
        <h3>{titulo}</h3>
        <ValorCard>{preco}</ValorCard>
      </InfosCard>
      <DescCard>{descricao}</DescCard>
      <BotaoCard>
        <Tag tag="bold">Adicionar ao carrinho</Tag>
      </BotaoCard>
    </div>
  </Card>
)

export default CardPrato2
