import styled from 'styled-components'
import { cores } from '../../estiloGlobal'

export const ContainerForm = styled.div`
  height: 100%;
  max-height: 1000px;
  overflow-y: scroll;
`

export const LinhaFlex = styled.div`
  display: flex;
  column-gap: 34px;
`

export const Campo = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  background-color: ${cores.branco};
  color: ${cores.cinza};
  border: none;
  font-weight: bold;

  &.erro {
    border: 1px solid red;
  }
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branco};
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  color: ${cores.branco};
`