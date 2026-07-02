import ecoBagImg from "/public/images/Remedios/ecobag.jpeg";
import alcoolGelImg from "/public/images/Remedios/alcool.jpeg";

// Medicamentos de receita padrão, sempre disponíveis inicialmente no carrinho.
// Antes esta lista existia duplicada (e divergente) em CarrinhoConfirmacao.jsx,
// CarrinhoPagamento.jsx, Cartao.jsx e Pix.jsx - agora é uma fonte única.
export const medicamentosPadraoReceita = [
  {
    id: 101,
    nome: "Ecobag ToTSimple",
    descricao:
      "Sacola reutilizável que serve como alternativa às sacolas plásticas descartáveis.",
    preco: 45.9,
    imagem: ecoBagImg,
    tipo: "receita",
  },
  {
    id: 102,
    nome: "Álcool Gel 70% ToTSimple",
    descricao: "Serve para higienizar as mãos e desinfetar superfícies.",
    preco: 89.5,
    imagem: alcoolGelImg,
    tipo: "receita",
  },
];
