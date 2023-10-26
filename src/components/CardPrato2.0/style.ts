import styled from 'styled-components'
import { breakpoints, cores } from '../../estiloGlobal'

import { TagName } from '../Tag/style'

export const Card = styled.div`
  max-height: 140px;
  height: 100%;
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  background-color: ${cores.vioetaClaro};
  color: ${cores.cinza};

  img {
    width: 130px;
    margin-right: 16px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      max-height: 225px;
    }
  }

  ${TagName} {
    color: ${cores.branco};
    margin-top: 12px;
  }

  div {
    width: 100%;
    position: relative;
  }

  @media (max-width: ${breakpoints.descktop}) {
    max-height: 200px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-height: none;
    height: auto;
    flex-direction: column;
  }
`

export const InfosCard = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  font-size: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
  }
`

export const ValorCard = styled.span`
  font-weight: bold;
  color: ${cores.branco};
`

export const DescCard = styled.p`
  font-size: 12px;
  height: 30px;

  @media (max-width: ${breakpoints.descktop}) {
    height: 60px;
  }
`

export const BotaoCard = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.descktop}) {
    position: absolute;
    bottom: -8px;
    right: 0;
  }
`
