import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './CarrinhoPagamento.css';
import Header from '../../Components/Header/Header';
import FundoT from '../../Components/FundoTotem/FundoT';
import ecobag from '/public/images/Remedios/ecobag.jpeg';
import alcool from '/public/images/Remedios/alcool.jpeg';
const CarrinhoPagamento = () => {
  
  const [medicamentosBalcao, setMedicamentosBalcao] = useState([]);
  
  // Medicamentos padrão da receita que sempre estarão disponíveis inicialmente
  const medicamentosPadraoReceita = [
    { id: 101, nome: 'Ecobag TotSimple', descricao: 'Sacola reutilizável que serve como alternativa às sacolas plásticas descartáveis.', preco: 45.90, imagem: ecobag, tipo: 'receita' },
    { id: 102, nome: 'Álcool Gel 70% TotSimple', descricao: 'Serve para higienizar as mãos e desinfetar superfícies.', preco: 89.50, imagem: alcool, tipo: 'receita' }
  ];

  const [medicamentosReceita, setMedicamentosReceita] = useState(medicamentosPadraoReceita);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      const medicamentos = JSON.parse(carrinhoSalvo).map(med => ({ ...med, tipo: 'balcao' }));
      setMedicamentosBalcao(medicamentos);
    }

    // Carregar medicamentos de receita salvos no localStorage, ou usar os padrão
    const receitaSalva = localStorage.getItem('medicamentosReceita');
    if (receitaSalva) {
      const receitaParsed = JSON.parse(receitaSalva);
      // Se não houver medicamentos salvos, usar os padrão
      if (receitaParsed.length === 0) {
        setMedicamentosReceita(medicamentosPadraoReceita);
        localStorage.setItem('medicamentosReceita', JSON.stringify(medicamentosPadraoReceita));
      } else {
        setMedicamentosReceita(receitaParsed);
      }
    } else {
      // Se não existe no localStorage, salvar os padrão
      localStorage.setItem('medicamentosReceita', JSON.stringify(medicamentosPadraoReceita));
    }
  }, []);

  const removerMedicamentoBalcao = (id) => {
    const novosMedicamentos = medicamentosBalcao.filter(med => med.id !== id);
    setMedicamentosBalcao(novosMedicamentos);
    localStorage.setItem('carrinho', JSON.stringify(novosMedicamentos));
  };

  const removerMedicamentoReceita = (id) => {
    const novosMedicamentosReceita = medicamentosReceita.filter(med => med.id !== id);
    setMedicamentosReceita(novosMedicamentosReceita);
    localStorage.setItem('medicamentosReceita', JSON.stringify(novosMedicamentosReceita));
  };

  const resetarMedicamentosReceita = () => {
    setMedicamentosReceita(medicamentosPadraoReceita);
    localStorage.setItem('medicamentosReceita', JSON.stringify(medicamentosPadraoReceita));
  };

  const todosMedicamentos = [...medicamentosReceita, ...medicamentosBalcao];
  const subtotal = todosMedicamentos.reduce((total, med) => total + med.preco, 0);
  const desconto = 0.00;
  const total = subtotal - desconto;

  return (
    <> <div className="fundo-totem-wrapper">
            <FundoT />
          </div>
    <div className="pagamento-wrapper">
     
      <Header />

      <main className="pagamento-main">
        <div className="medicamentos-section">
          <h2>Medicamentos no Carrinho</h2>
          
          {medicamentosReceita.length > 0 && (
            <div className="medicamentos-receita-section">
              <h3>Medicamentos da Receita</h3>
              {medicamentosReceita.map(med => (
                <div key={med.id} className="medicamento-card receita">
                  <img src={med.imagem} alt={med.nome} />
                  <div className="detalhes">
                    <h3>{med.nome}</h3>
                    <p>{med.descricao}</p>
                    <span>R$ {med.preco.toFixed(2)}</span>
                  </div>
                  <button 
                    className="btn-remove" 
                    onClick={() => removerMedicamentoReceita(med.id)}
                    title="Remover medicamento da receita"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {medicamentosBalcao.length > 0 && (
            <div className="medicamentos-balcao-section">
              <h3>Medicamentos do Balcão</h3>
              {medicamentosBalcao.map(med => (
                <div key={med.id} className="medicamento-card balcao">
                  <img src={med.imagem} alt={med.nome} />
                  <div className="detalhes">
                    <h3>{med.nome}</h3>
                    <p>{med.descricao}</p>
                    <span>R$ {med.preco.toFixed(2)}</span>
                  </div>
                  <button 
                    className="btn-remove" 
                    onClick={() => removerMedicamentoBalcao(med.id)}
                    title="Remover medicamento do balcão"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {medicamentosReceita.length === 0 && medicamentosBalcao.length === 0 && (
            <div className="carrinho-vazio">
              <h3>Nenhum medicamento no carrinho</h3>
              <p>Adicione medicamentos para continuar com o pagamento.</p>
              <button className="btn-resetar" onClick={resetarMedicamentosReceita}>
                Restaurar Medicamentos da Receita
              </button>
            </div>
          )}
        </div>

        <div className="resumo-pedido">
          <h3>Resumo do Pedido</h3>
          <div className="itens-resumo">
            <div><span>Subtotal:</span><span>R$ {subtotal.toFixed(2)}</span></div>
            <div><span>Desconto:</span><span>R$ {desconto.toFixed(2)}</span></div>
            <div className="total"><span>Total:</span><span>R$ {total.toFixed(2)}</span></div>
          </div>

          {medicamentosReceita.length === 0 && (
            <button className="btn-resetar-receita-sidebar" onClick={resetarMedicamentosReceita}>
              Restaurar Medicamentos da Receita
            </button>
          )}

          <div className="botoes-pagamento">
            <Link to="/Cartao">
            <button 
              className='CartaoCOR'
              disabled={todosMedicamentos.length === 0}
            >
              Pagar com Cartão
            </button>
            </Link>
            <Link to='/Pix'>
            <button  
              className='PixCor'
              disabled={todosMedicamentos.length === 0}
            >
              Pagar com PIX
            </button>
            </Link>
            <Link to='/TotemPagamento'>
            <button  className="cancelar">Cancelar</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default CarrinhoPagamento;