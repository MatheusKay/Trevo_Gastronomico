import styled from 'styled-components'

import { cores } from '../../estiloGlobal'

export const Cabecalho = styled.header`
  padding: 16px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.violeta};
  border-radius: 12px;
  color: ${cores.branco};
`

export const ContainerHeader = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.ul`
  display: flex;
  list-style: none;

  a {
    margin-right: 24px;
    text-decoration: none;
    font-weight: bold;
    color: ${cores.branco};
  }
`
export const ContainerCarrinho = styled.a`
  margin-right: 16px;
  position: relative;

  img {
    cursor: pointer;
  }
`

export const NumCarrinho = styled.span`
  width: 15px;
  padding: 1px;
  position: absolute;
  top: -9px;
  right: -9px;
  background-color: ${cores.vioetaClaro};
  border-radius: 50%;
  color: ${cores.cinza};
  font-size: 14px;
  text-align: center;
`
