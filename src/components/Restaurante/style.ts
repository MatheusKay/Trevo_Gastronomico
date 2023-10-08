import styled from 'styled-components'

import bannerSabor from '../../assets/images/imgRest/Rest_Sabor.png'
import { cores } from '../../estiloGlobal'

import { Titulo as TituloGeral } from '../PratosList/style'

export const BannerRest = styled.div`
  height: 575px;
  margin-top: 70px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(${bannerSabor}),
    lightgray 50%;
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
`

export const ContainerMenu = styled.div`
  margin-top: 70px;
  display: flex;
`

export const Aside = styled.aside`
  width: 25%;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
`
