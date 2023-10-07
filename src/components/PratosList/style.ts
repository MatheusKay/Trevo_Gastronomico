import styled from 'styled-components'
import { cores } from '../../estiloGlobal'

export const PratosLista = styled.div`
  margin-bottom: 64px;
`

export const Titulo = styled.div`
  padding: 16px;
  margin-bottom: 10%;
  margin-top: 5%;
  display: inline-block;
  font-size: 18px;
  background-color: ${cores.violeta};
  border-radius: 12px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`
