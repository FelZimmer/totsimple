<div align="center">

<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/TCC-FIAP%20School%202025-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />

# 🏥 TotSimple

### Sistema de Autoatendimento Inteligente para Drogarias

*Desenvolvido como Trabalho de Conclusão de Curso — FIAP School, 3º ano do Ensino Médio (2025)*

[🌐 Demo](https://totsimplebr.netlify.app) · [📄 Documentação](#) · [🐛 Reportar Bug](https://github.com/FelZimmer/totsimple/issues) · [💡 Sugerir Feature](https://github.com/FelZimmer/totsimple/issues)

</div>

---

## 📋 Sobre o Projeto

As drogarias brasileiras enfrentam desafios crescentes: filas longas, sobrecarga de funcionários e experiências frustrantes para os clientes. O **TotSimple** nasce para transformar esse cenário.

É um sistema de **totens de autoatendimento** projetado especialmente para drogarias, que digitaliza e processa receitas médicas, organiza pedidos para o farmacêutico e permite pagamento autônomo — tudo com uma interface intuitiva e acessível.

> *"As pessoas não compram o que você faz, mas o porquê você faz."* — Simon Sinek

**Por quê?** Acreditamos que tecnologia deve servir ao bem-estar humano. O TotSimple reduz filas, alivia a pressão sobre os profissionais de saúde e devolve autonomia ao cliente — sem eliminar o contato humano, mas tornando-o mais eficiente e significativo.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 📷 **Leitura de Receitas** | Scanner óptico digitaliza receitas médicas com rapidez e segurança |
| 💊 **Triagem Automática** | Pré-seleciona medicamentos de acordo com a prescrição |
| 🛒 **Pedido Personalizado** | Cliente pode adicionar outros itens antes de confirmar |
| 💳 **Pagamento Integrado** | Finalização da compra direto no totem, de forma ágil |
| 📲 **Envio ao Farmacêutico** | Pedidos com receita retida são enviados automaticamente para validação |
| ♿ **Acessibilidade** | Interface adaptada para diferentes perfis de usuário, incluindo idosos |
| 📊 **Painel de Gestão** | Acompanhamento do fluxo de atendimento em tempo real |

---

## 🛠️ Tecnologias

### Front-end
![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Back-end *(planejado)*
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

### Banco de Dados *(planejado)*
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Design & Gestão
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white)

---

## 🚀 Como Rodar o Projeto

> **Nota:** O projeto atualmente roda 100% no front-end, utilizando **localStorage** para persistência de dados (carrinho, triagem, pedidos). A integração com back-end Node.js e banco de dados MongoDB está prevista para versões futuras.

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FelZimmer/totsimple.git

# Acesse a pasta do projeto
cd totsimple

# Instale as dependências
npm install
```

### Executando

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build para produção

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## 🏗️ Arquitetura do Sistema

```
totsimple/
├── public/
│   └── images/
│       ├── Remedios/            # Imagens de medicamentos
│       ├── ilustracoes/         # Artes e mockups do totem (WebP otimizado)
│       ├── img/                 # Ícones e imagens gerais
│       └── team/                # Fotos da equipe
├── src/
│   ├── Components/              # Componentes reutilizáveis (landing page + fluxo)
│   │   ├── CarrinhoConfirmacao/
│   │   ├── Feature/
│   │   ├── Footer/
│   │   ├── FundoTotem/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Informations/
│   │   ├── MedicamentosBalcao/
│   │   ├── MobileDevice/
│   │   ├── ProblemSolution/
│   │   ├── Products/
│   │   ├── Teams/
│   │   ├── TimeLine/
│   │   └── TriagemFinalizada/
│   ├── Pages/                   # Telas do totem, agrupadas por fluxo de negócio
│   │   ├── Triagem/             # Leitura de receita e triagem do cliente
│   │   │   ├── Dados/
│   │   │   ├── Infotriagem/
│   │   │   ├── TotemFotoReceita/
│   │   │   ├── TotemModal/
│   │   │   ├── TotemReceita/
│   │   │   └── Triagem/
│   │   ├── Pagamento/           # Carrinho e finalização da compra
│   │   │   ├── CarrinhoPagamento/
│   │   │   ├── Cartao/
│   │   │   ├── Infopagamento/
│   │   │   ├── PagamentoFim/
│   │   │   ├── Pix/
│   │   │   ├── Scanner/
│   │   │   └── TotemPagamento/
│   │   └── Institucional/       # Páginas institucionais
│   │       ├── Contatos/
│   │       ├── Prototipo/
│   │       └── SobreNos/
│   ├── context/                 # Estado global (Context API + useReducer)
│   │   ├── CarrinhoContext.jsx
│   │   └── carrinhoContextInstance.js
│   ├── hooks/
│   │   └── useCarrinho.js       # Hook de acesso ao carrinho (estado + ações)
│   ├── data/                    # Dados estáticos (medicamentos, padrões)
│   ├── utils/
│   │   └── carrinho.js          # Funções puras de cálculo (subtotal, total)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📊 Contexto de Mercado

- 🇧🇷 O mercado farmacêutico brasileiro faturou **R$ 142 bilhões** em 2023
- 📈 O mercado global de autoatendimento deve atingir **USD 92 bilhões até 2030** (CAGR 13,8%)
- 👥 **304 de 400 consumidores** entrevistados acreditam que totens agilizariam o atendimento em drogarias
- 🏥 **51% dos farmacêuticos** sofrem com burnout (International Journal of Clinical Pharmacy)

---

## 👥 Equipe

| Membro | Papel |
|---|---|
| **Júlia Lemos** | Líder do Projeto |
| **Felipe Zimmermann** | Desenvolvimento Back-end |
| **Matheus Lopes** | Desenvolvimento Front-end |
| **Erick Li** | Financeiro |
| **Hugo Mariutti** | Marketing |
| **Luiza Sales** | Design & UX |

*Orientadoras: Maira Cezaretto e Talita Miranda*

---

## 📅 Roadmap

- [x] Pesquisa de mercado e validação com usuários
- [x] Desenvolvimento do protótipo (front-end + React)
- [x] Persistência de dados com localStorage
- [x] Design de interface no Figma
- [ ] Implementação piloto em drogaria parceira
- [ ] Coleta de feedback e ajustes
- [ ] Desenvolvimento do back-end com Node.js
- [ ] Integração com banco de dados MongoDB
- [ ] Expansão para novas unidades

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">

Feito com ❤️ por alunos da **FIAP School** — São Paulo, 2025

</div>
