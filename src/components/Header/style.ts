import styled from 'styled-components'

import { breakpoints, cores } from '../../estiloGlobal'

export const Cabecalho = styled.header`
  padding: 16px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.violeta};
  border-radius: 12px;
  color: ${cores.branco};

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
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

export const ContainerHeader = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    ${Links} {
      display: none;
    }
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

export const Humburgue = styled.div`
  width: 32px;

  span {
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    display: block;
    background-color: ${cores.branco};
  }
`

export const NavHamburgue = styled.div`
  width: 100%;
  height: 0;
  opacity: 0;

  ul {
    margin-top: 16px;
    flex-direction: column;
    row-gap: 16px;

    li {
      padding: 8px;
      background-color: ${cores.vioetaClaro};
      border-radius: 8px;
    }
  }

  a {
    width: 100%;
    display: block;
    color: ${cores.violeta};
  }

  &.aberto {
    height: auto;
    opacity: 1;
    transition: opacity 2s ease;
  }
`
