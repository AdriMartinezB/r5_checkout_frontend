import React from 'react';

import '../assets/styles/components/pagoExitoso.scss';

import happy from '../assets/img/Confirmación/happy.png';

const PagoExitoso = () => {
  return (
    <section className='Exitoso'>

      <div className='Exitoso-container-1'>
        <img src={happy} alt='cara feliz' />
        <p>Pago Exitoso!</p>
      </div>

      <div className='Exitoso-container-2'>
        <p className='container-2-p1'>
          Felicidades!!!
          {' '}
          <br />
          {' '}
          Tu compra fue exitosa, la factura se envio a tu correo electrónico.
        </p>
        <p className='container-2-p2'>
          Es un placer ayudarte!
          {' '}
          <br />
          {' '}
          :)
        </p>
      </div>

    </section>
  );
};

export default PagoExitoso;
