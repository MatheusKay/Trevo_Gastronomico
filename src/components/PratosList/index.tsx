import CardPrato from '../CardPrato'

import { Titulo, List, PratosLista, LinkRest } from './style'

import { Menu } from '../../pages/Restaurantes'

type Props = {
  titulo?: string
  menu?: Menu[]
}

const PratosList = ({ titulo, menu }: Props) => {
  return (
    <PratosLista>
      <div className="container">
        {titulo && <Titulo>{titulo}</Titulo>}
        <List>
          {menu?.map((menu) => {
            return (
              <LinkRest to="/restaurante" key={menu.nome}>
                <CardPrato
                  imagem={menu.foto}
                  titulo={menu.nome}
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
