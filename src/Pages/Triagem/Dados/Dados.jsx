import React, { useState } from 'react';
import './Dados.css';
import Header from '../../../Components/Header/Header';
import FundoT from '../../../Components/FundoTotem/FundoT';
import { Link } from 'react-router-dom';
Link


const Dados = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    dataNascimento: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmarDados = () => {
    console.log('Dados confirmados:', formData);
    
  };

  const handleVoltarScanner = () => {
    console.log('Voltando para scanner');
    
  };

  const handleCancelarTriagem = () => {
    console.log('Cancelando triagem');
   
  };

  return (
    <div className="insira-dados-container">
      <div className="background-pattern">
      <FundoT />
</div>
      <Header></Header>
<br />
<br />
    
      <main className="Dados-content">
        <div className="form-container">
          <h1>Insira Seus Dados Para Continuar</h1>
          <p className="subtitle">Digite Seu Nome Completo, CPF e Data de Nascimento :</p>

          <form className="dados-form">
            <div className="form-group">
              <label htmlFor="nomeCompleto">Nome Completo:</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="000.000.000-00"
                maxLength="14"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
              />
            </div>
<Link to='/CarrinhoConfirmacao'>
            <button 
              type="button" 
              className="btn-confirmar"
              onClick={handleConfirmarDados}
            >
              Confirmar Dados
            </button>
            </Link>
          </form>
        </div>
      </main>

     
      <div className="bottom-actions">
        <Link to='/TotemReceita'>
        <button className="btn-voltar"onClick={handleVoltarScanner}>
          Voltar para Scanner
        </button>
        </Link>

        <Link to='/Triagem'>
        <button 
          className="btn-cancelar"
          onClick={handleCancelarTriagem}
        >
          Cancelar Triagem
        </button>
        </Link>
      </div>

     
    
    </div>
  );
};

export default Dados;