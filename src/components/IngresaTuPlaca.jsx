/* eslint-disable react/button-has-type */
import React from 'react';

import '../assets/styles/components/ingresaTuPlaca.scss';
import ButtonComponent from './ButtonComponent';

const IngresaTuPlaca = () => {
  return (
    <section className='placa'>
      <h1>Métodos de Pago</h1>
      <input type='text' name='Placa' placeholder='ABC123' id='Placa' />
      <ButtonComponent location='/cotizacion' color='naranja' name='Cotiza Gratis' />
    </section>
  );
};

export default IngresaTuPlaca;
