import styled from 'styled-components'
import { breakpoints, cores } from '../../estiloGlobal'

export const Imagem = styled.div`
  height: 575px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(
    0deg,
    ${cores.violetaGradi} 0%,
    ${cores.violeta} 53.13%
  );
`

export const Titulo = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: normal;

  span {
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.descktop}) {
    font-size: 24px;
  }
`

export const ContainerRest = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 150px;
    border-radius: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    row-gap: 8px;
  }
`
