import Banner from '../../components/Banner'
import PratosList from '../../components/PratosList'
import Menu from '../../models/Cardapio'

import imgCarpaccio from '../../assets/images/ImgPratos/Carpaccio_Carne.png'
import imgSalmao from '../../assets/images/ImgPratos/Salmao_Grelhado.png'
import imgMoussaka from '../../assets/images/ImgPratos/Moussaka.png'
import imgTiramisu from '../../assets/images/ImgPratos/Tiramisu.png'

import imgDoces from '../../assets/images/imgRest/Rest_Doces.png'
import imgSabor from '../../assets/images/imgRest/Rest_Sabor.png'
import imgTrattoria from '../../assets/images/imgRest/Rest_Trattoria.png'
import imgChurrascaria from '../../assets/images/imgRest/Rest_Churrascaria.png'

const menu: Menu[] = [
  {
    imagem: imgCarpaccio,
    titulo: 'Carpaccio de Carne',
    nota: 4.9,
    categoria: 'Entrada',
    descricao:
      'Finas fatias de carne crua, geralmente carne bovina, temperadas com azeite de trufa, alcaparras, rúcula e queijo parmesão.',
    id: 1
  },
  {
    imagem: imgSalmao,
    titulo: 'Salmão Grelhado com Molho de Ervas',
    nota: 4.9,
    categoria: 'Prato principal',
    descricao:
      'Filé de salmão grelhado com um molho de ervas frescas, como dill e salsa, acompanhado de arroz ou vegetais.',
    id: 2
  },
  {
    imagem: imgMoussaka,
    titulo: 'Moussaka',
    nota: 4.8,
    categoria: 'Prato principal',
    descricao:
      'Um prato grego em camadas de berinjela, carne moída temperada, molho bechamel e gratinado no forno.',
    id: 3
  },
  {
    imagem: imgTiramisu,
    titulo: 'Tiramisu',
    nota: 4.9,
    categoria: 'Sobremesa',
    descricao:
      'Um clássico italiano de camadas de biscoitos de ladyfinger embebidos em café e creme de queijo mascarpone, polvilhado com cacau em pó.',
    id: 4
  }
]

const rest: Menu[] = [
  {
    imagem: imgDoces,
    titulo: 'Delicias Doces Café',
    nota: 4.5,
    categoria: '',
    descricao:
      'Localizado no coração da cidade, o Delícias Doces Café é um refúgio celestial para os amantes de sobremesas. Este encantador restaurante é especializado em criar experiências culinárias verdadeiramente doces e memoráveis.',
    id: 5
  },
  {
    imagem: imgSabor,
    titulo: 'Sabor & Tempero Bistrô',
    nota: 4.9,
    categoria: '',
    descricao:
      'O Sabor & Tempero Bistrô é o epítome da elegância culinária em nossa cidade. Este requintado restaurante combina sofisticação e sabor de uma forma que é verdadeiramente única. Com um ambiente encantador e uma decoração que evoca um charme clássico, este bistrô oferece uma experiência gastronômica inesquecível.',
    id: 6
  },
  {
    imagem: imgTrattoria,
    titulo: 'Ristorante La Trattoria',
    nota: 4.8,
    categoria: '',
    descricao:
      'O Ristorante La Trattoria é um refúgio gastronômico que oferece uma rica variedade de pratos inspirados em diferentes países. Apesar de não ser muito elegante em termos de decoração, este restaurante é um verdadeiro tesouro para os amantes da comida internacional.',
    id: 7
  },
  {
    imagem: imgChurrascaria,
    titulo: 'Fogo & Brasa Churrascaria',
    nota: 4.6,
    categoria: '',
    descricao:
      'A Fogo & Brasa Churrascaria é um verdadeiro paraíso para os amantes de carne e churrasco. Com uma atmosfera rústica e acolhedora, este restaurante é o destino perfeito para aqueles que buscam uma experiência de churrasco inigualável.    ',
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
