import { Card, InfosCard, ValorCard, BotaoCard, DescCard } from './style'

import imgRolinho from '../../assets/images/ImgPratos/Rolinhos_Primavera.png'
import Tag from '../Tag'

const CardPrato2 = () => (
  <Card>
    <img src={imgRolinho} alt="" />
    <div>
      <InfosCard>
        <h3>Nome do prato</h3>
        <ValorCard>R$ 79,99</ValorCard>
      </InfosCard>
      <DescCard>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        autem itaque minus non eius vitae adipisci doloribus facere, officiis
        sequi amet alias dolorum? Atque necessitatibus vitae, commodi quo
        deleniti incidunt.
      </DescCard>
      <BotaoCard>
        <Tag tag="bold">Adicionar ao carrinho</Tag>
      </BotaoCard>
    </div>
  </Card>
)

export default CardPrato2
