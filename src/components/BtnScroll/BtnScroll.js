import React, { useState, useEffect } from 'react';
import '../../css/btnScroll-style.css'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Adicione um listener de scroll para verificar a posição da página
      window.addEventListener('scroll', handleScroll);
      return () => {
        // Remova o listener de scroll ao desmontar o componente
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      // Verifique se a posição da página é maior do que um determinado valor (por exemplo, 100 pixels)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };
  
    const scrollToTop = () => {
      // Role a página suavemente até o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        ▲
      </button>
    );
  };
  
  export default ScrollToTopButton;
  