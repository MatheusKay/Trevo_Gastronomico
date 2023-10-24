import { Card, InfosCard, ValorCard, BotaoCard, DescCard } from './style'

import { Botao } from '../../estiloGlobal'

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
        <Botao type="button">Adicionar ao carrinho</Botao>
      </BotaoCard>
    </div>
  </Card>
)

export default CardPrato2
