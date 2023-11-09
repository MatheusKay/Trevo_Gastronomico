export const formaPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrecos = (items: Modal[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}

export const precoDoMenu = (itensMenu: Menu[]) => {
  return itensMenu.reduce((acumulador, valorAtual) => {
    if (valorAtual.preco) {
      return (acumulador += valorAtual.preco)
    }

    return 0
  }, 0)
}

export const precoDoSite = (itens: Modal[]) => {
  return itens.reduce((acumulador, valorAtual) => {
    if (valorAtual.preco) {
      return (acumulador += valorAtual.preco)
    }

    return 0
  }, 0)
}
