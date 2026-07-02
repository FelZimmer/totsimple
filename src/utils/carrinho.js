// Funções puras de cálculo do carrinho, fáceis de testar isoladamente.

export function calcularSubtotal(itens) {
  return itens.reduce((total, item) => total + item.preco, 0);
}

export function calcularTotal(subtotal, desconto = 0) {
  return subtotal - desconto;
}
