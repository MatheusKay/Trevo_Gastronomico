import PratosList from '../../components/PratosList'
import Menu from '../../models/Cardapio'

import imgDoces from '../../assets/images/imgRest/Rest_Doces.png'
import imgSabor from '../../assets/images/imgRest/Rest_Sabor.png'
import imgTrattoria from '../../assets/images/imgRest/Rest_Trattoria.png'
import imgChurrascaria from '../../assets/images/imgRest/Rest_Churrascaria.png'

export const rest: Menu[] = [
  {
    imagem: imgDoces,
    titulo: 'Delicias Doces Café',
    nota: 4.5,
    categoria: '',
    descricao:
      'Localizado no coração da cidade, o Delícias Doces Café é um refúgio celestial para os amantes de sobremesas. Este encantador restaurante é especializado em criar experiências culinárias verdadeiramente doces e memoráveis.',
    id: 1
  },
  {
    imagem: imgSabor,
    titulo: 'Sabor & Tempero Bistrô',
    nota: 4.9,
    categoria: '',
    descricao:
      'O Sabor & Tempero Bistrô é o epítome da elegância culinária em nossa cidade. Este requintado restaurante combina sofisticação e sabor de uma forma que é verdadeiramente única. Com um ambiente encantador e uma decoração que evoca um charme clássico, este bistrô oferece uma experiência gastronômica inesquecível.',
    id: 2
  },
  {
    imagem: imgTrattoria,
    titulo: 'Ristorante La Trattoria',
    nota: 4.8,
    categoria: '',
    descricao:
      'O Ristorante La Trattoria é um refúgio gastronômico que oferece uma rica variedade de pratos inspirados em diferentes países. Apesar de não ser muito elegante em termos de decoração, este restaurante é um verdadeiro tesouro para os amantes da comida internacional.',
    id: 3
  },
  {
    imagem: imgChurrascaria,
    titulo: 'Fogo & Brasa Churrascaria',
    nota: 4.6,
    categoria: '',
    descricao:
      'A Fogo & Brasa Churrascaria é um verdadeiro paraíso para os amantes de carne e churrasco. Com uma atmosfera rústica e acolhedora, este restaurante é o destino perfeito para aqueles que buscam uma experiência de churrasco inigualável.    ',
    id: 4
  }
]

const rest2: Menu[] = [
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

const Restaurantes = () => (
  <>
    <PratosList titulo="Todos os Restaurantes" menu={rest} />
    <PratosList menu={rest2} />
  </>
)

export default Restaurantes
