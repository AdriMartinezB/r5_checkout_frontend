/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/ingresaTuPlaca.scss';

const IngresaTuPlaca = () => {
  return (
    <section className='placa'>
      <h1>Métodos de Pago</h1>
      <input type='text' name='Placa' placeholder='ABC123' id='' />
      <Link className='placa--Link' to='/cotizacionFinal'>
        <button className='placa--button'>Cotizar Gratis</button>
      </Link>
    </section>
  );
};

export default IngresaTuPlaca;
