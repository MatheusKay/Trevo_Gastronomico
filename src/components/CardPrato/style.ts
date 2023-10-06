import styled from 'styled-components'
import { cores } from '../../estiloGlobal'
import { TagName } from '../Tag/style'

export const Card = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${cores.vioetaClaro};
  color: ${cores.cinza};
  border-radius: 12px;

  ${TagName} {
    color: ${cores.branco};
  }
`

export const Infos = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 16px;
`

export const Descricao = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
