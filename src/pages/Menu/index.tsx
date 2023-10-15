import PratosList from '../../components/PratosList'
import Menu from '../../models/Cardapio'

import imgRolinho from '../../assets/images/ImgPratos/Rolinhos_Primavera.png'
import imgVieira from '../../assets/images/ImgPratos/Vieira_Grelhada.png'
import imgBruschetta from '../../assets/images/ImgPratos/Bruschetta_Tomate.png'
import imgCarpaccio from '../../assets/images/ImgPratos/Carpaccio_Carne.png'

import imgSalmao from '../../assets/images/ImgPratos/Salmao_Grelhado.png'
import imgBife from '../../assets/images/ImgPratos/Bife_File.png'
import imgLombo from '../../assets/images/ImgPratos/Lombo_Cordeiro.png'
import imgMoussaka from '../../assets/images/ImgPratos/Moussaka.png'

import imgCheesecaka from '../../assets/images/ImgPratos/Cheesecake_Morango.png'
import imgBrulee from '../../assets/images/ImgPratos/Creme_Brûlée.png'
import imgMousse from '../../assets/images/ImgPratos/Mousse_Chocolate.png'
import imgTiramisu from '../../assets/images/ImgPratos/Tiramisu.png'

const menu: Menu[] = [
  {
    imagem: imgRolinho,
    titulo: 'Rolinho de Primavera',
    nota: 4.7,
    categoria: 'Entrada',
    descricao:
      ' Rolinhos recheados com legumes frescos, camarão ou frango, e servidos com molho de amendoim ou molho agridoce.',
    id: 1
  },
  {
    imagem: imgVieira,
    titulo: 'Vieiras Grelhadas',
    nota: 4.6,
    categoria: 'Entrada',
    descricao:
      'Vieiras frescas grelhadas com manteiga de alho, servidas sobre purê de batata-doce ou risoto de limão.',
    id: 2
  },
  {
    imagem: imgBruschetta,
    titulo: 'Bruschetta de Tomate e Manjericão',
    nota: 4.5,
    categoria: 'Entrada',
    descricao:
      'Fatias de pão crocante cobertas com tomate maduro, manjericão fresco, alho e azeite de oliva.',
    id: 3
  },
  {
    imagem: imgCarpaccio,
    titulo: 'Carpaccio de Carne',
    nota: 4.9,
    categoria: 'Entrada',
    descricao:
      'Finas fatias de carne crua, geralmente carne bovina, temperadas com azeite de trufa, alcaparras, rúcula e queijo parmesão.',
    id: 4
  },
  {
    imagem: imgSalmao,
    titulo: 'Salmão Grelhado com Molho de Ervas',
    nota: 4.9,
    categoria: 'Prato principal',
    descricao:
      'Filé de salmão grelhado com um molho de ervas frescas, como dill e salsa, acompanhado de arroz ou vegetais.',
    id: 5
  },
  {
    imagem: imgBife,
    titulo: 'Bife de Filé Mignon',
    nota: 4.7,
    categoria: 'Prato principal',
    descricao:
      'Um suculento filé mignon grelhado e temperado com ervas, servido com molho de vinho tinto e acompanhado de batatas gratinadas.',
    id: 6
  },
  {
    imagem: imgLombo,
    titulo: 'Lombo de Cordeiro com Molho de Hortelã',
    nota: 4.9,
    categoria: 'Prato principal',
    descricao:
      'Lombo de cordeiro grelhado, servido com um molho de hortelã fresca e acompanhado de purê de batata.',
    id: 7
  },
  {
    imagem: imgMoussaka,
    titulo: 'Moussaka',
    nota: 4.8,
    categoria: 'Prato principal',
    descricao:
      'Um prato grego em camadas de berinjela, carne moída temperada, molho bechamel e gratinado no forno.',
    id: 8
  },
  {
    imagem: imgCheesecaka,
    titulo: 'Cheesecake de Morango',
    nota: 4.8,
    categoria: 'Sobremesa',
    descricao:
      'Um cheesecake cremoso com uma base de biscoito, coberto com uma camada de geleia de morango fresca e morangos inteiros.',
    id: 9
  },
  {
    imagem: imgBrulee,
    titulo: 'Creme Brûlée',
    nota: 4.7,
    categoria: 'Sobremesa',
    descricao:
      'Um creme de baunilha delicado com uma crosta de açúcar caramelizado quebrante por cima.',
    id: 10
  },
  {
    imagem: imgMousse,
    titulo: 'Mousse de Chocolate',
    nota: 4.9,
    categoria: 'Sobremesa',
    descricao:
      'Uma sobremesa aerada e decadente feita com chocolate amargo, ovos e creme de leite, servida em taças individuais.',
    id: 11
  },
  {
    imagem: imgTiramisu,
    titulo: 'Tiramisu',
    nota: 4.9,
    categoria: 'Sobremesa',
    descricao:
      'Um clássico italiano de camadas de biscoitos de ladyfinger embebidos em café e creme de queijo mascarpone, polvilhado com cacau em pó.',
    id: 12
  }
]

export const filtro = (menuCat: any[], categoria: string) => {
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
    {/* <PratosList titulo="Entradas" menu={filtro(menu, 'Entrada')} /> */}
    {/* <PratosList
      titulo="Pratos principais"
      menu={filtro(menu, 'Prato principal')}
    /> */}
    {/* <PratosList titulo="Sobremesas" menu={filtro(menu, 'Sobremesa')} /> */}
  </>
)

export default MenuList
