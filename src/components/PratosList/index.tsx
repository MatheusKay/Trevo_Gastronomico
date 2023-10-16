import { useEffect, useState } from 'react'

import CardPrato from '../CardPrato'
import { Titulo, List, PratosLista } from './style'

import { Menu, Rest } from '../../pages/Restaurantes'

type Props = {
  titulo?: string
  menu?: Menu[]
  restID?: Rest[]
}

const filtro = (menuCat: Rest[], categoria: string) => {
  return menuCat.flatMap((item) =>
    item.cardapio.filter((menu) => menu.categoria === categoria)
  )
}

const PratosList = ({ titulo, menu, restID }: Props) => {
  return (
    <PratosLista>
      <div className="container">
        {titulo && <Titulo>{titulo}</Titulo>}
        <List>
          {menu?.map((menu) => {
            return (
              <>
                <CardPrato
                  key={menu.nome}
                  imagem={menu.foto}
                  titulo={menu.nome}
                  nota={menu.nota}
                  categoria={menu.categoria}
                  descricao={menu.descricao}
                  id={menu.id}
                />
              </>
            )
          })}
        </List>
      </div>
    </PratosLista>
  )
}

export default PratosList
