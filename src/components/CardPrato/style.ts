import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../estiloGlobal'
import { TagName } from '../Tag/style'

export const Card = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${cores.vioetaClaro};
  border-radius: 12px;
  color: ${cores.cinza};

  ${TagName} {
    color: ${cores.branco};
  }
`

export const ImgMenu = styled.img`
  width: 100%;
  height: 164px;
`

export const Infos = styled.div`
  height: 36px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 16px;
  margin-right: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Descricao = styled.p`
  line-height: 22px; /* Altura de linha desejada */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  max-width: 222px;
  margin-top: 16px;
  font-size: 14px;
`

export const Avaliacao = styled.img`
  width: 20px;
  margin-left: 2px;
`
