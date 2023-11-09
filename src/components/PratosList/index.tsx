import { useState } from 'react'
import { useDispatch } from 'react-redux'

import CardPrato from '../CardPrato'
import Tag from '../Tag'

import { addModal, abrir } from '../../store/reducers/carrinho'

import { formaPreco } from '../../ultis'

import vetorEstrela from '../../assets/images/Vetor_Estrela.png'
import vetorFechar from '../../assets/images/fechar.png'

import * as S from './style'
import { Botao } from '../../estiloGlobal'

type Props = {
  titulo?: string
  menu?: Menu[]
  id?: string
}

const PratosList = ({ titulo, menu, id }: Props) => {
  const [modal, setModal] = useState<Modal>({
    estaVisivel: false,
    url: '',
    categoria: '',
    descricao: '',
    titulo: '',
    nota: 0,
    preco: 0,
    id: 0
  })

  const fecharModal = () => {
    setModal({
      estaVisivel: false,
      url: '',
      categoria: '',
      descricao: '',
      titulo: '',
      nota: 0,
      preco: 0,
      id: 0
    })
  }

  const dispatch = useDispatch()

  const addCarrinho = () => {
    dispatch(addModal(modal))
    dispatch(abrir())
    fecharModal()
  }

  return (
    <>
      <S.PratosLista id={id}>
        <div className="container">
          {titulo && <S.Titulo>{titulo}</S.Titulo>}
          <S.List>
            {menu?.map((menu) => {
              return (
                <div
                  key={menu.nome}
                  onClick={() => {
                    setModal({
                      estaVisivel: true,
                      url: menu.foto,
                      titulo: menu.nome,
                      categoria: menu.categoria,
                      descricao: menu.descricao,
                      nota: menu.nota,
                      preco: menu.preco,
                      id: menu.id
                    })
                  }}
                >
                  <CardPrato
                    imagem={menu.foto}
                    titulo={menu.nome}
                    nota={menu.nota}
                    categoria={menu.categoria}
                    descricao={menu.descricao}
                    id={menu.id}
                  />
                </div>
              )
            })}
          </S.List>
        </div>
      </S.PratosLista>
      <S.Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <div className="container">
          <header>
            <img
              onClick={() => {
                fecharModal()
              }}
              src={vetorFechar}
              alt=""
            />
          </header>
          <div className="container-card">
            <img src={modal.url} alt="" />
            <div>
              <div className="modalNome">
                <h4>{modal.titulo}</h4>
                <span>{formaPreco(modal.preco)}</span>
              </div>
              <div>
                <Tag tag="bold">
                  {modal.nota}
                  <img src={vetorEstrela} alt="" />
                </Tag>
                <Tag tag="normal">{modal.categoria}</Tag>
              </div>
              <p>{modal.descricao}</p>
              <div className="container-button">
                <Botao onClick={addCarrinho}>Adicionar ao carrinho</Botao>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlay"
          onClick={() => {
            fecharModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default PratosList
