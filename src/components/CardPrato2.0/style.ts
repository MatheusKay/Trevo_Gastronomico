import styled from 'styled-components'
import { cores } from '../../estiloGlobal'

import { TagName } from '../Tag/style'

export const Card = styled.div`
  max-height: 130px;
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  background-color: ${cores.vioetaClaro};
  color: ${cores.cinza};

  img {
    width: 130px;
    margin-right: 16px;
  }

  ${TagName} {
    color: ${cores.branco};
    margin-top: 12px;
  }
`

export const InfosCard = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`

export const ValorCard = styled.span`
  font-weight: bold;
  color: ${cores.branco};
`

export const DescCard = styled.p`
  font-size: 12px;
`

export const BotaoCard = styled.div`
  display: flex;
  justify-content: flex-end;
`
