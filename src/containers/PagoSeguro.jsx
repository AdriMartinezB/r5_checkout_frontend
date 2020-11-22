import React from 'react';

import '../assets/styles/containers/pagoSeguro.scss';

import mercadoPago from '../assets/img/Pago seguro/mercado.png';
import ListOfSeguridades from './ListOfSeguridades';

const PagoSeguro = () => {
  return (
    <section className='Pay'>

      <img className='Pay-title' src={mercadoPago} alt='' />

      <h1 className='Pay-subtitle'>Tu pago 100% seguro:</h1>

      <ListOfSeguridades />

    </section>
  );
};

export default PagoSeguro;
