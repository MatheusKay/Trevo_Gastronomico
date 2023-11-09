import styled from 'styled-components'
import { cores } from '../../estiloGlobal'

export const FormContainer = styled.form`
  input {
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
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branco};
  }
`

export const LinhaFlex = styled.div`
  display: flex;
  column-gap: 34px;
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  color: ${cores.branco};
`

export const ContainerAgradecimento = styled.div`
  font-size: 14px;
  color: ${cores.branco};

  .margin-top {
    margin-top: 24px;
  }
`
