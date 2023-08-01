import React, { useState } from 'react';
import '../../css/service-style.css';
import Title from '../Title/Title';

function Service({ subTitle, describe, img, desc01, desc02, desc03, desc04, desc05, desc06, desc07 }) {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  const handleCloseButtonClick = () => {
    setShowDiv(false);
  };

  return (
    <div id="service" className="service-container">
      <div className="service-box">
        <div className="service-describe">
          <h2>{subTitle}</h2>
          <p>{describe}</p>
          <button className="service-btn" onClick={handleButtonClick}>O que será feito</button>
        </div>
        <div className="img-service-box">
          <img className="img-service" src={img} alt="" />
        </div>
      </div>
      <div className={`service-list-box ${showDiv ? 'show' : ''}`}>
          <ul className='service-list'>
            <div className='list-box'>
              <li>{desc01}</li>
              <li>{desc02}</li>
              <li>{desc03}</li>
              <li>{desc04}</li>
            </div>
            <div className='list-box'> 
              <li>{desc05}</li>
              <li>{desc06}</li>
              <li>{desc07}</li>
            </div>
          </ul>
          <button className='close-btn' onClick={handleCloseButtonClick}>Fechar</button>
        </div>
    </div>
  );
}

export default Service;

