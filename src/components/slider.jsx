import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/slider.scss';

const Slider = () => {
  return (
    <div className='slider'>
      <h1>SOAT</h1>
      <p>Hasta $75.000 de descuento en tu SOAT</p>
      <Link to='/cotizacion/'>
        <button>Cotiza Gratis</button>
      </Link>
    </div>
  );
};

export default Slider;
