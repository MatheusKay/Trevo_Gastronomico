import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuList from './pages/Menu'
import Restaurantes from './pages/Restaurantes'
import PagRestaurante from './pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuList />} />
    <Route path="/restaurantes" element={<Restaurantes />} />
    <Route path="/restaurante" element={<PagRestaurante />} />
  </Routes>
)

export default Rotas
