import Menu from '../../models/Cardapio'
import CardPrato from '../CardPrato'

import { Titulo, List } from './style'

type Props = {
  titulo: string
  menu: Menu[]
}

const PratosList = ({ titulo, menu }: Props) => (
  <div className="container">
    <Titulo>{titulo}</Titulo>
    <List>
      {menu.map((menu) => (
        <CardPrato
          imagem={menu.imagem}
          titulo={menu.titulo}
          nota={menu.nota}
          categoria={menu.categoria}
          descricao={menu.descricao}
          key={menu.id}
        />
      ))}
    </List>
  </div>
)

export default PratosList
