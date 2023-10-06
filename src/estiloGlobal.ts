import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#EEEEEE',
  violeta: '#6C404C',
  vioetaClaro: '#DCA8B5',
  violetaGradi: '#C08E9B',
  cinza: '#333333'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${cores.branco};
    font-family: sans-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
