/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/components/tipotarjeta.scss';
import pse from '../assets/img/Metodo de pago/pse.png';
import masterCard from '../assets/img/Metodo de pago/master card.png';
import visa from '../assets/img/Metodo de pago/visa.png';
import americanExpress from '../assets/img/Metodo de pago/american express.png';
import ButtonClose from './ButtonClose';

const TipoTarjeta = ({ tarjeta }) => {
  return (
    <section className='tipotarjeta'>
      <div className='tipotarjeta__titulo'>
        <h3>Selecciona tu método de pago</h3>
        <ButtonClose />
      </div>
      <form className='tipotarjeta__body'>
        <div className='tarjeta'>
          <img src={pse} alt='pse' />
          <input type='radio' name='tarjeta' id='debito' />
          <label htmlFor='debito'>Tarjeta de Debito</label>
        </div>
        <div className='tarjeta'>
          <img src={masterCard} alt='masterCard' />
          <input type='radio' name='tarjeta' id='credito' />
          <label htmlFor='credito'>Tarjeta de Crédito</label>
        </div>
        <div className='tarjeta'>
          <img src={visa} alt='visa' />
          <input type='radio' name='tarjeta' id='tarjeta1' />
          <label htmlFor='tarjeta1'>********354</label>
        </div>
        <div className='tarjeta'>
          <img src={americanExpress} alt='americanExpress' />
          <input type='radio' name='tarjeta' id='tarjeta2' />
          <label htmlFor='tarjeta2'>********489</label>
        </div>
      </form>
    </section>
  );
};

export default TipoTarjeta;
