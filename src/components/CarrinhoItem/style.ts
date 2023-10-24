import styled from 'styled-components'

import { cores } from '../../estiloGlobal'
import { TagName } from '../Tag/style'

export const CarrinhoItemContainer = styled.li`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  color: ${cores.cinza};
  background-color: ${cores.vioetaClaro};

  > img {
    width: 80px;
    margin-right: 8px;
    object-fit: cover;
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
  font-wight: bold;

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  ${TagName} {
    color: ${cores.branco};
    font-size: 10px;
  }
`

export const InfosItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p,
  span {
    font-wight: bold;
    font-size: 14px;
  }
`

export const RemoverItem = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;

  img {
    cursor: pointer;
  }
`
