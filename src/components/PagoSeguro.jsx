import React from 'react';

import '../assets/styles/components/pagoSeguro.scss';

import mercadoPago from '../assets/img/Pago seguro/mercado.png';
import primer from '../assets/img/Pago seguro/1erIcono.png';
import segundo from '../assets/img/Pago seguro/2doIcono.png';
import tercero from '../assets/img/Pago seguro/3erIcono.png';

const PagoSeguro = () => {
  return (
    <section className='Pay'>

      <img className='Pay-title' src={mercadoPago} alt='' />

      <h1 className='Pay-subtitle'>Tu pago 100% seguro:</h1>

      <div className='Safe'>
        <img src={primer} alt='primer icono' />
        <p>MercadoPago es la pasarela más grande del continente.</p>
      </div>
      <div className='Safe'>
        <img src={segundo} alt='segundo icono' />
        <p>Tus datos están completamente seguros.</p>
      </div>
      <div className='Safe'>
        <img src={tercero} alt='tecer icono' />
        <p>Usamos encripción 128-bit</p>
      </div>

    </section>
  );
};

export default PagoSeguro;
