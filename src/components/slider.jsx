/* eslint-disable react/button-has-type */
import React from 'react';
import ButtonComponent from './ButtonComponent';

import '../assets/styles/components/slider.scss';

const Slider = () => {
  return (
    <div className='slider'>
      <h1>SOAT</h1>
      <p>Hasta $75.000 de descuento en tu SOAT</p>
      <ButtonComponent location='/ingresaPlaca' color='naranja' name='Cotiza Gratis' />
    </div>
  );
};

export default Slider;
