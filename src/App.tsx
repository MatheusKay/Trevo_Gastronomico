import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './estiloGlobal'

import Header from './components/Header'

import Rotas from './routers'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
