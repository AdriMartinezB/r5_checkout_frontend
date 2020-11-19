import React from 'react';

import '../assets/styles/components/metodoDePago.scss';

import pse from '../assets/img/Metodo de pago/pse.png';
import americanExpress from '../assets/img/Metodo de pago/american express.png';
import jbc from '../assets/img/Metodo de pago/jcb.png';
import circulo from '../assets/img/Metodo de pago/bola azul.png';
import visa from '../assets/img/Metodo de pago/visa.png';
import masterCard from '../assets/img/Metodo de pago/master card.png';

const MetodoDePago = () => {
  return (
    <section className='Method'>
      <h1 className='Method-title'>Métodos de Pago</h1>
      <div className='Method-img'>
        <img src={pse} alt='pse' />
        <img src={americanExpress} alt='americanExpress' />
        <img src={jbc} alt='jbc' />
        <img src={circulo} alt='circulo' />
        <img src={visa} alt='visa' />
        <img src={masterCard} alt='masterCard' />
      </div>
    </section>
  );
};

export default MetodoDePago;
