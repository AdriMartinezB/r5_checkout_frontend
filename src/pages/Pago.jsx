import React from 'react';

import '../assets/styles/pages/pago.scss';
import Resumen from '../components/Resumen';
import TusDatos from '../components/TusDatos';
import ListOfProducts from '../containers/ListOfProducts';
import ButtonComponent from '../components/ButtonComponent';

const Pago = () => {
  return (
    <section className='pago-container'>
      <div className='pago'>
        <h1 className='pago-title'>Pago</h1>
        <TusDatos />
        <ButtonComponent location='/TarjetaMetodo/' name='Elige tu forma de pago' color='naranja' />
        <div className='containerList'>
          <ListOfProducts isCesta={false} />
        </div>
        <Resumen />

        <ButtonComponent location='/confirmacion/' name='PAGAR $' color='naranja' />

      </div>
    </section>
  );

};

export default Pago;
