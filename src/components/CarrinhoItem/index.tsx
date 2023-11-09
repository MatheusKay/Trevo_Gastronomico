import { useDispatch } from 'react-redux'

import Tag from '../Tag'

import fecharImg from '../../assets/images/fechar.png'

import { formaPreco } from '../../ultis'
import { remover } from '../../store/reducers/carrinho'

import * as S from './style'

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
    <S.CarrinhoItemContainer key={nome}>
      <img src={foto} alt="" />
      <S.ContainerInfos>
        <S.InfosItem>
          <h3>{nome ? limitarTexto(nome) : ''}</h3>
          <p>{formaPreco(preco)}</p>
        </S.InfosItem>
        <Tag tag="normal">{categoria}</Tag>
      </S.ContainerInfos>
      <S.RemoverItem>
        <img onClick={() => dispatch(remover(id))} src={fecharImg} alt="" />
      </S.RemoverItem>
    </S.CarrinhoItemContainer>
  )
}

export default CarrinhoItem
