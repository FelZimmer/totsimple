import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicamentosBalcao.css';
import Header from '../Header/Header';
import { useCarrinho } from '../../hooks/useCarrinho';
import { categorias, medicamentosBalcao as listaMedicamentos } from '../../data/medicamentosBalcao';
import ProdutoCard from './components/ProdutoCard';

const MedicamentosBalcao = () => {
  const navigate = useNavigate();
  const { carrinho, adicionarBalcao, limparCarrinho } = useCarrinho();
  const [categoriaAtiva, setCategoriaAtiva] = useState('Dor e Febre');

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

  const medicamentosFiltrados = listaMedicamentos.filter(med => med.categoria === categoriaAtiva);

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
              <ProdutoCard
                key={medicamento.id}
                medicamento={medicamento}
                onAdicionar={adicionarAoCarrinho}
              />
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
