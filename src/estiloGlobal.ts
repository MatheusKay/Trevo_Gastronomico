import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#EEEEEE',
  violeta: '#6C404C',
  vioetaClaro: '#DCA8B5',
  violetaGradi: '#C08E9B',
  cinza: '#333333',
  fundo: '#EEEEEE'
}

//  Cores para o tipo dark do site

// branco: '#333333',
// violeta: '#DCA8B5',
// vioetaClaro: '#6C404C',
// violetaGradi: '#C08E9B',
// cinza: '#EEEEEE',
// fundo: '#333333'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${cores.branco};
    background-color: ${cores.fundo};
    font-family: sans-serif;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Botao = styled.button`
  padding: 6px;
  display: flex;
  justify-content: end;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: ${cores.branco};
  background-color: ${cores.violeta};
  border: none;
  border-radius: 12px;
  cursor: pointer;
`
