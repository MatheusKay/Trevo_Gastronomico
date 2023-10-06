class Menu {
  imagem: string
  titulo: string
  nota: number
  categoria: string
  descricao: string
  id: number

  constructor(
    imagem: string,
    titulo: string,
    nota: number,
    categoria: string,
    descricao: string,
    id: number
  ) {
    this.imagem = imagem
    this.titulo = titulo
    this.nota = nota
    this.categoria = categoria
    this.descricao = descricao
    this.id = id
  }
}

export default Menu
