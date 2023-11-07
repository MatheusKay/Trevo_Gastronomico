import styled from 'styled-components'
import { Botao, breakpoints, cores } from '../../estiloGlobal'

export const CarrinhoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .carrinho-vazio {
    font-size: 12px;
    color: ${cores.branco};
    text-align: center;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`

export const BarraLateral = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 40px 8px;
  z-index: 1;
  background-color: ${cores.violeta};

  ${Botao} {
    width: 100%;
    display: block;
    margin-top: 16px;
    background-color: ${cores.vioetaClaro};
    color: ${cores.cinza};
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const InfosItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p,
  span {
    font-wight: bold;
    font-size: 14px;
  }
`
