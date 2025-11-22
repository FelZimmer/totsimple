import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '/public/images/img/Vector.png';


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('mobile-overlay')) {
      closeMenu();
    }
  };

  return (
    <>
      <header className="animate-on-load">
        <div className="logo">
          <img src={logo} alt="" className="imgheader" />
          <a href="/"><i className="fas fa-brain"></i>Tot<span>Simple</span></a>
        </div>

        <div className="nav-container">
          <nav>
            <a href="/">Home</a>
            <div
              className="dropdown"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <a href="#produto">Produto</a>
              {isProductMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/Infotriagem">Totem Triagem</Link>
                  <Link to="/Infopagamento">Totem Pagamento</Link>
                </div>
              )}
            </div>
            <Link to="/About">
            Sobre nós
            </Link>
            <Link to="/Contato">
         Contato
            </Link>
          </nav>
        </div>

        <Link to="/prototipo">
          <div className="cta-container">
            <a href="#download" className="cta-button">Protótipo</a>
          </div>
        </Link>

        <div className="menu-toggle" onClick={openMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-overlay active" onClick={handleOverlayClick}>
          <div className="close-btn" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </div>

          <nav className="mobile-nav">
            <a href="#features">Home</a>
            <div className="mobile-dropdown">
              <span>Produto</span>
              <Link to="/Infotriagem">Totem Triagem</Link>
              <Link to="/Infopagamento">Totem Pagamento</Link>
              
            </div>
            <a href="#pricing">Sobre nós</a>
            <a href="#faq">Contato</a>
            <a href="#download" className="mobile-cta">
              <i className="fas fa-download"></i> Get the App
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
