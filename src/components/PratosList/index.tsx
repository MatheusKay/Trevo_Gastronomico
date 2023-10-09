import Menu from '../../models/Cardapio'
import CardPrato from '../CardPrato'

import { Titulo, List, PratosLista, LinkRest } from './style'

import { minhaFuncao } from '../../pages/Restaurante'

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
            const tituloClick = menu.titulo
            return (
              <LinkRest
                to="/restaurante"
                key={menu.id}
                onClick={() => minhaFuncao(tituloClick)}
              >
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
