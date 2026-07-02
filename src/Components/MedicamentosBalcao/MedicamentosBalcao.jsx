import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicamentosBalcao.css';
import Header from '../Header/Header';
import { useCarrinho } from '../../hooks/useCarrinho';

// IMPORTS DAS IMAGENS
import aliviumImg from "/public/images/Remedios/alivium-capsula-400mg-caixa-com-8-capsulas-gelatinosas_10701.jpg";
import toragesicImg from "/public/images/Remedios/toragesic.jpg";
import allegraImg from "/public/images/Remedios/Allegra.webp";
import loratadinaImg from "/public/images/Remedios/Loratadina.webp";
import benegripImg from "/public/images/Remedios/356239-benegrip-20-comprimidos.jpg.webp";
import epoclerImg from "/public/images/Remedios/Epocler.jpeg";
import TOtimg from "/public/images/img/Vector.png";

const MedicamentosBalcao = () => {
  const navigate = useNavigate();
  const { carrinho, adicionarBalcao, limparCarrinho } = useCarrinho();
  const [categoriaAtiva, setCategoriaAtiva] = useState('Dor e Febre');

  const categorias = [
    'Dor e Febre',
    'Alergia',
    'Gripes',
    'Digestão e Azia',
    'Enjoo e Náuseas',
    'Nariz e Garganta'
  ];

  const medicamentos = [
    {
      id: 1,
      nome: 'Alivium',
      descricao: 'Ibuprofeno 400mg - 20 comprimidos',
      sintomas: ['Dor de cabeça', 'Dor muscular', 'Febre'],
      preco: 15.90,
      imagem: aliviumImg,
      categoria: 'Dor e Febre'
    },
    {
      id: 2,
      nome: 'Toragesic',
      descricao: 'Cetorolaco 10mg - 12 comprimidos',
      sintomas: ['Dor intensa', 'Dor pós-operatória'],
      preco: 28.50,
      imagem: toragesicImg,
      categoria: 'Dor e Febre'
    },
    {
      id: 3,
      nome: 'Allegra',
      descricao: 'Fexofenadina 120mg - 10 comprimidos',
      sintomas: ['Rinite alérgica', 'Urticária'],
      preco: 32.90,
      imagem: allegraImg,
      categoria: 'Alergia'
    },
    {
      id: 4,
      nome: 'Loratadina',
      descricao: 'Loratadina 10mg - 12 comprimidos',
      sintomas: ['Alergia', 'Coceira', 'Espirros'],
      preco: 8.90,
      imagem: loratadinaImg,
      categoria: 'Alergia'
    },
    {
      id: 5,
      nome: 'Benegrip',
      descricao: 'Paracetamol + Cafeína - 20 comprimidos',
      sintomas: ['Gripe', 'Resfriado', 'Dor de cabeça'],
      preco: 12.50,
      imagem: benegripImg,
      categoria: 'Gripes'
    },
    {
      id: 6,
      nome: 'Epocler',
      descricao: 'Hidróxido de Alumínio - 240ml',
      sintomas: ['Azia', 'Queimação', 'Má digestão'],
      preco: 18.90,
      imagem: epoclerImg,
      categoria: 'Digestão e Azia'
    },
    {
      id: 7,
      nome: 'TOTSimple Digest',
      descricao: '30mg - 20 comprimidos',
      sintomas: ['Dor', 'Azia', 'Má digestão'],
      preco: 25.90,
      imagem: TOtimg,
      categoria: 'Digestão e Azia'
    }
  ];

  const adicionarAoCarrinho = (medicamento) => {
    adicionarBalcao(medicamento);
  };

  const finalizarTriagem = () => {
    navigate('/CarrinhoConfirmacao');
  };

  const abandonarCompra = () => {
    limparCarrinho();
    navigate('/');
  };

  const medicamentosFiltrados = medicamentos.filter(med => med.categoria === categoriaAtiva);

  return (
    <div className="medicamentos-balcao">
      <Header />

      <div className="main-content1">
        <aside className="sidebar">
          <h3>Categorias</h3>
          <ul className="categorias-list">
            {categorias.map(categoria => (
              <li
                key={categoria}
                className={`categoria-item ${categoriaAtiva === categoria ? 'ativa' : ''}`}
                onClick={() => setCategoriaAtiva(categoria)}
              >
                {categoria}
              </li>
            ))}
          </ul>
        </aside>

        <main className="produtos-area">
          <h2>Medicamentos de Balcão - {categoriaAtiva}</h2>
          <div className="produtos-grid">
            {medicamentosFiltrados.map(medicamento => (
              <div key={medicamento.id} className="produto-card">
                <img src={medicamento.imagem} alt={medicamento.nome} className="produto-imagem" />
                <div className="produto-info">
                  <h3>{medicamento.nome}</h3>
                  <p className="produto-descricao">{medicamento.descricao}</p>
                  <div className="sintomas">
                    <strong>Trata:</strong>
                    <ul>
                      {medicamento.sintomas.map((sintoma, index) => (
                        <li key={index}>{sintoma}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="produto-preco">
                    R$ {medicamento.preco.toFixed(2)}
                  </div>
                  <button
                    className="btn-adicionar"
                    onClick={() => adicionarAoCarrinho(medicamento)}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className="footer-buttons">
        <button className="btn-finalizar" onClick={finalizarTriagem}>
          Finalizar Triagem
        </button>
        <button className="btn-abandonar" onClick={abandonarCompra}>
          Abandonar Compra
        </button>
        <div className="carrinho-info">
          <span className="carrinho-icon">🛒</span>
          <span className="carrinho-count">{carrinho.length}</span>
        </div>
      </footer>
    </div>
  );
};

export default MedicamentosBalcao;
