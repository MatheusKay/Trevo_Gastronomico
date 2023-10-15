import styled from 'styled-components'

import { cores } from '../../estiloGlobal'

import { Titulo as TituloGeral } from '../../components/PratosList/style'

export const BannerRest = styled.div`
  height: 575px;
  margin-top: 70px;
  background-size: cover;
  background-repeat: no-repeat;
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
    margin-left: 12px;
  }
`

export const ContainerDescRest = styled.div`
  margin-top: 70px;
`

export const DescRest = styled.p`
  margin-bottom: 16px;
  color: ${cores.cinza};
`

export const Titulo = styled.h2`
  margin-left: 125px;
  font-size: 24px;
`

export const TituloSec = styled(TituloGeral)`
  font-size: 14px;
  cursor: pointer;
`

export const ContainerMenu = styled.div`
  margin-top: 70px;
  display: flex;

  div {
    max-width: 800px;
    width: 100%;
  }
`

export const Aside = styled.aside`
  width: 25%;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
`
