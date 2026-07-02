import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiEmotionSadFill, RiUserUnfollowFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { FaAngry, FaHospital, FaClipboardList } from "react-icons/fa";
import { HiEmojiSad } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineDirectionsRun, MdAdfScanner, MdOutlinePayment, MdElderly, MdEmojiPeople } from "react-icons/md";
import { BiHappy, BiAccessibility } from "react-icons/bi";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export const stats = [
  {
    variant: "critical",
    icon: <AiOutlineFieldTime />,
    numero: "7.3",
    label: "Nota de Desempenho",
    sublabel: "(Pesquisa Decomposer)",
    status: "CRÍTICO",
  },
  {
    variant: "warning",
    icon: <RiEmotionSadFill />,
    numero: "51%",
    label: "Farmacêuticos com Burnout",
    sublabel: "(Int. Journal Clinical Pharmacy)",
    status: "ALARMANTE",
  },
  {
    variant: "danger",
    icon: <BsPeopleFill />,
    numero: "62%",
    label: "Clientes não retornam",
    sublabel: "após experiência negativa",
    status: "PERDA CRÍTICA",
  },
];

export const flowSteps = [
  { icon: <MdOutlineDirectionsRun />, titulo: "Cliente Chega", desc: "Precisa de medicamento com receita" },
  { icon: <GiSandsOfTime />, titulo: "Fila de Espera", desc: "Aguarda atendimento presencial" },
  { icon: <FaAngry />, titulo: "Sobrecarga", desc: "Funcionário acumula tarefas" },
  { icon: <HiEmojiSad />, titulo: "Insatisfação", desc: "Cliente e funcionário frustrados" },
];

export const impactAreas = [
  {
    icon: <RiUserUnfollowFill />,
    titulo: "Impacto nos Funcionários",
    itens: [
      "Múltiplas tarefas simultâneas",
      "Estresse e ansiedade constante",
      "Risco de burnout elevado",
      "Ambiente de trabalho prejudicado",
    ],
  },
  {
    icon: <BsPeopleFill />,
    titulo: "Impacto nos Clientes",
    itens: [
      "Filas longas e tempo perdido",
      "Experiência de compra negativa",
      "Migração para concorrentes",
      "Perda de fidelização",
    ],
  },
  {
    icon: <FaHospital />,
    titulo: "Impacto no Negócio",
    itens: [
      "Redução nas vendas",
      "Alta rotatividade de funcionários",
      "Reputação prejudicada",
      "Ineficiência operacional",
    ],
  },
];

export const features = [
  {
    icon: <MdAdfScanner />,
    titulo: "Escaneamento Inteligente",
    texto: "Leitura rápida e segura de receitas médicas com tecnologia OCR avançada",
  },
  {
    icon: <FaClipboardList />,
    titulo: "Pedidos Automatizados",
    texto: "Envio direto de pedidos para o farmacêutico com pré-seleção de medicamentos",
  },
  {
    icon: <MdOutlinePayment />,
    titulo: "Pagamento Ágil",
    texto: "Interface interativa para pagamento rápido e seguro",
  },
];

export const timelineSteps = [
  { numero: 1, titulo: " Tot Triagem", texto: "Cliente insere receita no totem e sistema digitaliza automaticamente" },
  { numero: 2, titulo: " Personalização", texto: "Adiciona outros medicamentos necessários ao pedido" },
  { numero: 3, titulo: " Liberdade", texto: "Explora a drogaria enquanto pedido é preparado" },
  { numero: 4, titulo: " Atendimento Humanizado", texto: "Farmacêutico chama pelo nome para entrega personalizada" },
  { numero: 5, titulo: " Pagamento Flexível", texto: "Finaliza no totem ou caixa tradicional" },
];

export const beneficios = [
  {
    icon: <FaArrowTrendDown />,
    titulo: "Eficiência",
    texto: (
      <>
        Redução de até <strong>70%</strong> no tempo de atendimento
      </>
    ),
  },
  {
    icon: <BiHappy />,
    titulo: "Satisfação",
    texto: (
      <>
        Experiência <strong>personalizada</strong> e sem filas
      </>
    ),
  },
  {
    icon: <BsPeopleFill />,
    titulo: "Bem-estar",
    texto: (
      <>
        Funcionários focam em <strong>tarefas especializadas</strong>
      </>
    ),
  },
  {
    icon: <FaArrowTrendUp />,
    titulo: "Crescimento",
    texto: (
      <>
        Aumento na <strong>fidelização</strong> e vendas
      </>
    ),
  },
];

export const profiles = [
  { icon: <MdElderly />, titulo: "Idosos", texto: "Interface simplificada com letras grandes e navegação intuitiva" },
  { icon: <MdEmojiPeople />, titulo: "Jovens", texto: "Navegação rápida e interface moderna e responsiva" },
  { icon: <BiAccessibility />, titulo: "Acessibilidade", texto: "Recursos de acessibilidade para pessoas com necessidades especiais" },
];
