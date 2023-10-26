import styled from 'styled-components'

import { breakpoints, cores } from '../../estiloGlobal'

import { Titulo as TituloGeral } from '../../components/PratosList/style'

export const BannerRest = styled.div`
  height: 575px;
  margin-top: 70px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    content: '';
  }
`

export const LogoRest = styled.div`
  margin-top: -150px;
  display: flex;
  align-items: end;
  position: relative;
  z-index: 1;
  color: ${cores.cinza};

  img {
    max-width: 225px;
    width: 100%;
    border-radius: 50%;
    border: 2px solid black;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }
`

export const ContainerDescRest = styled.div`
  margin-top: 70px;
  line-height: 24px;
`

export const DescRest = styled.p`
  margin-bottom: 16px;
  color: ${cores.cinza};
`

export const Titulo = styled.h2`
  margin-left: 125px;
  font-size: 24px;

  @media (max-width: ${breakpoints.descktop}) {
    margin: 0;
  }
`

export const TituloSec = styled(TituloGeral)`
  font-size: 14px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`

export const ContainerMenu = styled.div`
  margin-top: 70px;
  display: flex;

  div {
    max-width: 800px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const Aside = styled.aside`
  width: 25%;
  margin-right: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    flex-direction: row;
    column-gap: 8px;
  }
`
