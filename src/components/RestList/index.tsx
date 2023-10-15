import CardPrato from '../CardPrato'

import { Titulo, List, PratosLista } from './style'

import { Rest } from '../../pages/Restaurantes'

type Props = {
  titulo?: string
  rest?: Rest[]
}

const RestList = ({ titulo, rest }: Props) => {
  return (
    <PratosLista>
      <div className="container">
        {titulo && <Titulo>{titulo}</Titulo>}
        <List>
          {rest?.map((item) => {
            return (
              <>
                <CardPrato
                  key={item.titulo}
                  imagem={item.capa}
                  titulo={item.titulo}
                  nota={item.avaliacao}
                  categoria=""
                  descricao={item.descricao}
                  id={item.id}
                />
              </>
            )
          })}
        </List>
      </div>
    </PratosLista>
  )
}

export default RestList
