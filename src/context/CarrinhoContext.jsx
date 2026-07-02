import { createContext, useReducer, useEffect } from "react";
import { medicamentosPadraoReceita } from "../data/medicamentosPadrao";

const CARRINHO_KEY = "carrinho";
const RECEITA_KEY = "medicamentosReceita";

function lerDoLocalStorage(key, valorPadrao) {
  try {
    const bruto = localStorage.getItem(key);
    if (!bruto) return valorPadrao;
    const parsed = JSON.parse(bruto);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : valorPadrao;
  } catch {
    return valorPadrao;
  }
}

function estadoInicial() {
  return {
    carrinho: lerDoLocalStorage(CARRINHO_KEY, []),
    medicamentosReceita: lerDoLocalStorage(RECEITA_KEY, medicamentosPadraoReceita),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_BALCAO":
      return { ...state, carrinho: [...state.carrinho, action.payload] };
    case "REMOVE_BALCAO":
      return {
        ...state,
        carrinho: state.carrinho.filter((med) => med.id !== action.payload),
      };
    case "REMOVE_RECEITA":
      return {
        ...state,
        medicamentosReceita: state.medicamentosReceita.filter(
          (med) => med.id !== action.payload
        ),
      };
    case "RESET_RECEITA":
      return { ...state, medicamentosReceita: medicamentosPadraoReceita };
    case "CLEAR_CARRINHO":
      return { ...state, carrinho: [] };
    case "CLEAR_ALL":
      return { carrinho: [], medicamentosReceita: medicamentosPadraoReceita };
    default:
      return state;
  }
}

export const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, estadoInicial);

  // Persiste automaticamente no localStorage sempre que o estado muda,
  // num único lugar (antes cada componente fazia isso manualmente).
  useEffect(() => {
    localStorage.setItem(CARRINHO_KEY, JSON.stringify(state.carrinho));
  }, [state.carrinho]);

  useEffect(() => {
    localStorage.setItem(RECEITA_KEY, JSON.stringify(state.medicamentosReceita));
  }, [state.medicamentosReceita]);

  return (
    <CarrinhoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
