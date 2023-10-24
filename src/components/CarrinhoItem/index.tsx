import { useDispatch } from 'react-redux'

import fecharImg from '../../assets/images/fechar.png'
import Tag from '../Tag'

import {
  CarrinhoItemContainer,
  ContainerInfos,
  InfosItem,
  RemoverItem
} from './style'

import { formaPreco } from '../PratosList'
import { remover } from '../../store/reducers/carrinho'

type Props = {
  id: number
  foto: string
  nome: string
  preco: number
  categoria: string
}

const CarrinhoItem = ({ id, foto, nome, preco, categoria }: Props) => {
  const dispatch = useDispatch()

  const limitarTexto = (texto: string) => {
    if (texto.length > 35) {
      return texto.substring(0, 30) + '...'
    } else {
      return texto
    }
  }

  return (
    <CarrinhoItemContainer key={nome}>
      <img src={foto} alt="" />
      <ContainerInfos>
        <InfosItem>
          <h3>{nome ? limitarTexto(nome) : ''}</h3>
          <p>{formaPreco(preco)}</p>
        </InfosItem>
        <Tag tag="normal">{categoria}</Tag>
      </ContainerInfos>
      <RemoverItem>
        <img onClick={() => dispatch(remover(id))} src={fecharImg} alt="" />
      </RemoverItem>
    </CarrinhoItemContainer>
  )
}

export default CarrinhoItem
