import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, cores } from '../../estiloGlobal'
import { TagName } from '../Tag/style'

export const PratosLista = styled.div`
  margin-bottom: 64px;
`

export const LinkRest = styled(Link)`
  text-decoration: none;
  color: ${cores.cinza};
`

export const Titulo = styled.h2`
  padding: 16px;
  margin-bottom: 10%;
  margin-top: 5%;
  display: inline-block;
  font-size: 18px;
  background-color: ${cores.violeta};
  border-radius: 12px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 16px;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.descktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  &.visivel {
    display: flex;
  }

  .container {
    width: 960px;
    margin: 0 auto;
    z-index: 1;

    @media (max-width: ${breakpoints.descktop}) {
      width: 90%;
    }

    header {
      margin-bottom: 8px;
      display: flex;
      justify-content: end;

      img {
        width: 20px;
        cursor: pointer;
      }
    }

    .container-card {
      height: 225px;
      padding: 16px;
      display: flex;
      background-color: ${cores.vioetaClaro};

      > img {
        width: 280px;
        margin-right: 16px;
        object-fit: cover;

        @media (max-width: ${breakpoints.tablet}) {
          width: 100%;
          max-height: 225px;
        }
      }

      > div {
        width: 100%;
        position: relative;
      }

      @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
      }

      @media (max-width: ${breakpoints.tablet}) {
        height: auto;
      }
    }

    ${TagName} {
      margin-right: 6px;
      margin-bottom: 16px;

      img {
        width: 20px;
      }
    }

    p {
      max-width: 80%;
      line-height: 22px;

      @media (max-width: ${breakpoints.descktop}) {
        max-width: 100%;
      }

      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 15%;
      }
    }
  }

  .modalNome {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: bold;
      margin-left: 8px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 8px;
    }
  }

  .container-button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: end;
    align-items: end;
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.73);
  }

  h4,
  p {
    color: ${cores.cinza};
  }
`
