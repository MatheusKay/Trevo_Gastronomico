import Restaurante from '../../components/Restaurante'
import Menu from '../../models/Cardapio'

import imgSabor from '../../assets/images/Sabor_Tempero.png'

const rest: Menu[] = [
  {
    imagem: imgSabor,
    titulo: 'Sabor & Tempero Bistrô',
    nota: 4.9,
    categoria: '',
    descricao:
      'O Sabor & Tempero Bistrô é o epítome da elegância culinária em nossa cidade. Este requintado restaurante combina sofisticação e sabor de uma forma que é verdadeiramente única. Com um ambiente encantador e uma decoração que evoca um charme clássico, este bistrô oferece uma experiência gastronômica inesquecível.',
    id: 2
  }
]

//irei usar essa função para separar os restaurantes e renderizar apenas os que forem clicadas

function filtroRest(restCat: any[], parametro: string) {
  return restCat.filter(
    (prato: { [s: string]: unknown } | ArrayLike<unknown>) => {
      return Object.values(prato).some((valor) => {
        if (typeof valor === 'string' && valor.includes(parametro)) {
          return true
        }
        return false
      })
    }
  )
}

const PagRestaurante = () => {
  return (
    <div>
      <Restaurante restaurante={filtroRest(rest, '')} />
    </div>
  )
}

export default PagRestaurante
