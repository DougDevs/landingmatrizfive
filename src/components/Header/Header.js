import React, { useState } from 'react';
import '../../css/header-style.css';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Logo />
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
      <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
        <NavBar props="HOME" targetSection="home" />
        <NavBar props="SOBRE NÓS" targetSection="about" />
        <NavBar props="SERVIÇOS" targetSection="service" />
        <NavBar props="FALE CONOSCO" targetSection="contact" />
      </nav>
    </div>
  );
}

export default Header;

