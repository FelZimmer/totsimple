import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '/public/images/img/Vector.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Fechar menu ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Cleanup ao desmontar componente
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <>
    <div className='headermaecentro'>
      <div className="navbar animate-fade-in">
        {/* Logo */}
        <div className="brand">
          <img src={logo} alt="TotSimple Logo" className="brand-icon" />
          <Link to="/">
            <i className="fas fa-brain"></i>Tot<span>Simple</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navigation-wrapper">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <a href="#produto">Produto</a>
              {isProductMenuOpen && (
                <div className="submenu">
                  <Link to="/Infotriagem">Totem Triagem</Link>
                  <Link to="/Infopagamento">Totem Pagamento</Link>
                </div>
              )}
            </div>
            
            <Link to="/About">Sobre nós</Link>
            <Link to="/Contato">Contato</Link>
          </nav>
        </div>

        {/* CTA Button */}
        <Link to="/prototipo" className="action-btn-wrapper">
          <div className="action-btn">Protótipo</div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
              </div>






      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay active" onClick={(e) => {
          if (e.target.classList.contains('overlay')) {
            closeMobileMenu();
          }
        }}>
          <div className="mobile-panel">
            <div className="panel-close" onClick={closeMobileMenu}>
              <i className="fas fa-times"></i>
            </div>

            <nav className="mobile-navigation">
              <Link to="/" onClick={closeMobileMenu}>
                <i className="fas fa-home"></i>
                Home
              </Link>

              <div className="mobile-submenu">
                <div 
                  className="submenu-trigger"
                  onClick={() => setProductMenuOpen(!isProductMenuOpen)}
                >
                  <span>
                    <i className="fas fa-cube"></i>
                    Produto
                  </span>
                  <i className={`fas fa-chevron-${isProductMenuOpen ? 'up' : 'down'}`}></i>
                </div>
                
                {isProductMenuOpen && (
                  <div className="submenu-items">
                    <Link to="/Infotriagem" onClick={closeMobileMenu}>
                      <i className="fas fa-desktop"></i>
                      Totem Triagem
                    </Link>
                    <Link to="/Infopagamento" onClick={closeMobileMenu}>
                      <i className="fas fa-credit-card"></i>
                      Totem Pagamento
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/About" onClick={closeMobileMenu}>
                <i className="fas fa-info-circle"></i>
                Sobre nós
              </Link>

              <Link to="/Contato" onClick={closeMobileMenu}>
                <i className="fas fa-envelope"></i>
                Contato
              </Link>

              <Link to="/prototipo" className="mobile-action-btn" onClick={closeMobileMenu}>
                <i className="fas fa-download"></i>
                Protótipo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;