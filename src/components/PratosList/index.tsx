import Menu from '../../models/Cardapio'
import CardPrato from '../CardPrato'

import { Titulo, List, PratosLista, LinkRest } from './style'

type Props = {
  titulo?: string
  menu: Menu[]
}

const PratosList = ({ titulo, menu }: Props) => {
  return (
    <PratosLista>
      <div className="container">
        {titulo && <Titulo>{titulo}</Titulo>}
        <List>
          {menu.map((menu) => {
            return (
              <LinkRest to="/restaurante" key={menu.id}>
                <CardPrato
                  imagem={menu.imagem}
                  titulo={menu.titulo}
                  nota={menu.nota}
                  categoria={menu.categoria}
                  descricao={menu.descricao}
                />
              </LinkRest>
            )
          })}
        </List>
      </div>
    </PratosLista>
  )
}

export default PratosList
