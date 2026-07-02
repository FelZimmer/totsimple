import React, { useEffect, useState } from 'react';
import './Cartao.css';
import Header from '../../../Components/Header/Header';
import { MdOutlinePayment } from 'react-icons/md';
import FundoT from '../../../Components/FundoTotem/FundoT';
import { useNavigate } from 'react-router-dom';

const Cartao = () => {
  const [total, setTotal] = useState(0);
  const [contador, setContador] = useState(10); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const carrinhoSalvo = localStorage.getItem('carrinho');
    let carrinho = [];
    if (carrinhoSalvo) {
      carrinho = JSON.parse(carrinhoSalvo);
    }

    const medicamentosReceita = [
      { id: 101, nome: 'Amoxilina', descricao: 'Amoxilina 500mg - 21 comprimidos', preco: 45.90 },
      { id: 102, nome: 'Avamys', descricao: 'Fluticasona 27,5mcg - 120 doses', preco: 89.50 }
    ];

    const todosMedicamentos = [...medicamentosReceita, ...carrinho];
    const subtotal = todosMedicamentos.reduce((total, med) => total + med.preco, 0);
    setTotal(subtotal.toFixed(2));
  }, []);

 
  useEffect(() => {
    if (contador <= 0) {
      navigate('/PagamentoFim'); 
      return;
    }

    const timer = setTimeout(() => {
      setContador(contador - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [contador, navigate]);

  const cancelar = () => {
    navigate('/');
  };

  return (
    <div className="payment-screen">
      <Header />

      <div className="main-contentara">
        <h1 className="title">Pagamento em cartão</h1>

        <div className="total-section">
          <span className="total-label">Total</span>
          <span className="total-amount">R$ {total}</span>
        </div>

        <div className="card-machine-container">
          <div className="card-machine-icon">
            <MdOutlinePayment size={100} color="#0563A9" />
          </div>
        </div>

        <p className="instructions">
          Siga as instruções na Máquina de<br />
          Cartões:
        </p>

        <p className="contador">Redirecionando em {contador} segundos...</p>

        <button className="cancel-button" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Cartao;
