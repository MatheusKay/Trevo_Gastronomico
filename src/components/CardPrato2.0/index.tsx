import * as S from './style'
import { Botao } from '../../estiloGlobal'

type Props = {
  imagem: string
  titulo: string
  preco: string
  descricao: string
}

const CardPrato2 = ({ descricao, imagem, preco, titulo }: Props) => (
  <S.Card>
    <img src={imagem} alt={titulo} />
    <div>
      <S.InfosCard>
        <h3>{titulo}</h3>
        <S.ValorCard>{preco}</S.ValorCard>
      </S.InfosCard>
      <S.DescCard>{descricao}</S.DescCard>
      <S.BotaoCard>
        <Botao type="button">Adicionar ao carrinho</Botao>
      </S.BotaoCard>
    </div>
  </S.Card>
)

export default CardPrato2
