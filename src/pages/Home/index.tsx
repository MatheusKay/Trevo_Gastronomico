import Banner from '../../components/Banner'
import PratosList from '../../components/PratosList'
import Menu from '../../models/Cardapio'

const menu: Menu[] = [
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Prato principal',
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
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 3
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do prato',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 4
  }
]

const rest: Menu[] = [
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do restaurante',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 5
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do restaurante',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 6
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do restaurante',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 7
  },
  {
    imagem: '//placehold.it/204x145',
    titulo: 'Nome do restaurante',
    nota: 4.5,
    categoria: 'Prato principal',
    descricao: 'teste',
    id: 8
  }
]

const Home = () => (
  <>
    <Banner />
    <PratosList titulo="Pratos principais" menu={menu} />
    <PratosList titulo="Restaurantes principais" menu={rest} />
  </>
)

export default Home
