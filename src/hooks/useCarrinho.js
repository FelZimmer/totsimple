import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { calcularSubtotal, calcularTotal } from "../utils/carrinho";

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um <CarrinhoProvider>");
  }
  const { state, dispatch } = context;

  const medicamentosBalcao = state.carrinho.map((med) => ({
    ...med,
    tipo: "balcao",
  }));
  const medicamentosReceita = state.medicamentosReceita;
  const todosMedicamentos = [...medicamentosReceita, ...medicamentosBalcao];
  const subtotal = calcularSubtotal(todosMedicamentos);
  const desconto = 0;
  const total = calcularTotal(subtotal, desconto);

  return {
    carrinho: state.carrinho,
    medicamentosBalcao,
    medicamentosReceita,
    todosMedicamentos,
    subtotal,
    desconto,
    total,
    adicionarBalcao: (medicamento) =>
      dispatch({ type: "ADD_BALCAO", payload: medicamento }),
    removerBalcao: (id) => dispatch({ type: "REMOVE_BALCAO", payload: id }),
    removerReceita: (id) => dispatch({ type: "REMOVE_RECEITA", payload: id }),
    resetarReceita: () => dispatch({ type: "RESET_RECEITA" }),
    limparCarrinho: () => dispatch({ type: "CLEAR_CARRINHO" }),
    limparTudo: () => dispatch({ type: "CLEAR_ALL" }),
  };
}
