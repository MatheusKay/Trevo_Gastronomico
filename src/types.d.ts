declare type Menu = {
  categoria: string
  descricao: string
  foto: string
  id: number
  nome: string
  nota: number
  preco: number
}

declare type Rest = {
  id: number
  logo: string
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  cardapio: {
    id: number
    foto: string
    nome: string
    preco: number
    descricao: string
    categoria: string
    nota: number
  }[]
}

declare type Modal = {
  estaVisivel?: boolean
  url?: string
  titulo?: string
  descricao: string
  categoria: string
  nota: number
  preco: number
  id: number
}
