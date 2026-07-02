import aliviumImg from "/public/images/Remedios/alivium-capsula-400mg-caixa-com-8-capsulas-gelatinosas_10701.jpg";
import toragesicImg from "/public/images/Remedios/toragesic.jpg";
import allegraImg from "/public/images/Remedios/Allegra.webp";
import loratadinaImg from "/public/images/Remedios/Loratadina.webp";
import benegripImg from "/public/images/Remedios/356239-benegrip-20-comprimidos.jpg.webp";
import epoclerImg from "/public/images/Remedios/Epocler.jpeg";
import TOtimg from "/public/images/img/Vector.png";

export const categorias = [
  "Dor e Febre",
  "Alergia",
  "Gripes",
  "Digestão e Azia",
  "Enjoo e Náuseas",
  "Nariz e Garganta",
];

export const medicamentosBalcao = [
  {
    id: 1,
    nome: "Alivium",
    descricao: "Ibuprofeno 400mg - 20 comprimidos",
    sintomas: ["Dor de cabeça", "Dor muscular", "Febre"],
    preco: 15.9,
    imagem: aliviumImg,
    categoria: "Dor e Febre",
  },
  {
    id: 2,
    nome: "Toragesic",
    descricao: "Cetorolaco 10mg - 12 comprimidos",
    sintomas: ["Dor intensa", "Dor pós-operatória"],
    preco: 28.5,
    imagem: toragesicImg,
    categoria: "Dor e Febre",
  },
  {
    id: 3,
    nome: "Allegra",
    descricao: "Fexofenadina 120mg - 10 comprimidos",
    sintomas: ["Rinite alérgica", "Urticária"],
    preco: 32.9,
    imagem: allegraImg,
    categoria: "Alergia",
  },
  {
    id: 4,
    nome: "Loratadina",
    descricao: "Loratadina 10mg - 12 comprimidos",
    sintomas: ["Alergia", "Coceira", "Espirros"],
    preco: 8.9,
    imagem: loratadinaImg,
    categoria: "Alergia",
  },
  {
    id: 5,
    nome: "Benegrip",
    descricao: "Paracetamol + Cafeína - 20 comprimidos",
    sintomas: ["Gripe", "Resfriado", "Dor de cabeça"],
    preco: 12.5,
    imagem: benegripImg,
    categoria: "Gripes",
  },
  {
    id: 6,
    nome: "Epocler",
    descricao: "Hidróxido de Alumínio - 240ml",
    sintomas: ["Azia", "Queimação", "Má digestão"],
    preco: 18.9,
    imagem: epoclerImg,
    categoria: "Digestão e Azia",
  },
  {
    id: 7,
    nome: "TOTSimple Digest",
    descricao: "30mg - 20 comprimidos",
    sintomas: ["Dor", "Azia", "Má digestão"],
    preco: 25.9,
    imagem: TOtimg,
    categoria: "Digestão e Azia",
  },
];
