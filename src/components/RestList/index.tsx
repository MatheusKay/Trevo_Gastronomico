import CardPrato from '../CardPrato'

import * as S from './style'

type Props = {
  titulo?: string
  rest?: Rest[]
}

const RestList = ({ titulo, rest }: Props) => {
  return (
    <S.PratosLista>
      <div className="container">
        {titulo && <S.Titulo>{titulo}</S.Titulo>}
        <S.List>
          {rest?.map((item) => {
            return (
              <S.LinkRest to={`/restaurante/${item.id}`} key={item.titulo}>
                <CardPrato
                  imagem={item.capa}
                  titulo={item.titulo}
                  nota={item.avaliacao}
                  categoria=""
                  descricao={item.descricao}
                  id={item.id}
                />
              </S.LinkRest>
            )
          })}
        </S.List>
      </div>
    </S.PratosLista>
  )
}

export default RestList
