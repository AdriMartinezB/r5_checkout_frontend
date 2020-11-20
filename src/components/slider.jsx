import React from 'react';
import ButtomComponent from './ButtomComponent';

import '../assets/styles/components/slider.scss';

const Slider = () => {
  return (
    <div className='slider'>
      <h1>SOAT</h1>
      <p>Hasta $75.000 de descuento en tu SOAT</p>
      <ButtomComponent location='/ingresaPlaca' color='naranja' name='Cotiza Gratis' />
    </div>
  );
};

export default Slider;
