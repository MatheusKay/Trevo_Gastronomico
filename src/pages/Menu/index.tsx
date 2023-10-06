import PratosList from '../../components/PratosList'
import Menu from '../../models/Cardapio'

const menu: Menu[] = [
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Entrada',
    descricao: 'teste',
    id: 1
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 2
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Sobremesa',
    descricao: 'teste',
    id: 3
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Sobremesa',
    descricao: 'teste',
    id: 4
  }
]

const filtro = (menuCat: any[], categoria: string) => {
  return menuCat.filter(
    (prato: { [s: string]: unknown } | ArrayLike<unknown>) => {
      return Object.values(prato).some((valor) => {
        if (typeof valor === 'string' && valor.includes(categoria)) {
          return true
        }
        return false
      })
    }
  )
}

const MenuList = () => (
  <>
    <PratosList titulo="Entradas" menu={filtro(menu, 'Entrada')} />
    <PratosList
      titulo="Pratos principais"
      menu={filtro(menu, 'Prato principal')}
    />
    <PratosList titulo="Sobremesas" menu={filtro(menu, 'Sobremesa')} />
  </>
)

export default MenuList
