import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './estiloGlobal'

import Header from './components/Header'

import Rotas from './routers'
import { store } from './store'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
