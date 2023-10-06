import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuList from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuList />} />
  </Routes>
)

export default Rotas
