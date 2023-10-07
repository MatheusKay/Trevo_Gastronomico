import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuList from './pages/Menu'
import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuList />} />
    <Route path="/restaurantes" element={<Restaurantes />} />
  </Routes>
)

export default Rotas
