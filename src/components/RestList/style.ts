import styled from 'styled-components'
import { breakpoints, cores } from '../../estiloGlobal'

import { Link } from 'react-router-dom'

export const PratosLista = styled.div`
  margin-bottom: 64px;
`

export const LinkRest = styled(Link)`
  text-decoration: none;
  color: ${cores.cinza};
`

export const Titulo = styled.h2`
  padding: 16px;
  margin-bottom: 10%;
  margin-top: 5%;
  display: inline-block;
  font-size: 18px;
  background-color: ${cores.violeta};
  border-radius: 12px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 16px;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.descktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
