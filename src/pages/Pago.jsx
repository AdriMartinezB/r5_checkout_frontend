import React from 'react';
import { Link } from 'react-router-dom';

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
        <ButtonComponent location='/formaDePago/' name='Elige tu forma de pago' color='verde' />
        <div className='containerList'>
          <ListOfProducts />
        </div>
        <Resumen />

        <ButtonComponent location='/confirmacion/' name='PAGAR $' color='naranja' />

      </div>
    </section>
  );

};

export default Pago;
